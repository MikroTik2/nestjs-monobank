import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

import { DEFAULT_URL } from "./monobank.constant";
import {
    MonobankOptionsSymbol,
    type MonobankOptions,
    type InvoiceStatus,
    type Invoice,
    type InvoiceCreateRequest,
    type CardToken,
    type CardTokens,
    type CardTokenRequest,
    type CaptureHold,
    type CaptureHoldRequest,
    type Refund,
    type RefundRequest,
    type Statement,
    type Checks,
    type Merchant,
} from "./interfaces";

@Injectable()
export class MonobankService {
    private readonly apiKey: string;
    private readonly apiUrl: string;

    public constructor(
        @Inject(MonobankOptionsSymbol)
        private readonly options: MonobankOptions,
        private readonly httpService: HttpService,
    ) {
        this.apiKey = options.apiKey;
        this.apiUrl = DEFAULT_URL;
    }

    private async request<T>(method: "get" | "post" | "delete", url: string, data?: unknown): Promise<T> {
        try {
            const response = await firstValueFrom(
                this.httpService.request<T>({
                    method,
                    url: `${this.apiUrl}${url}`,
                    headers: {
                        "Content-Type": "application/json",
                        "X-Token": this.apiKey,
                    },
                    data,
                }),
            );
            return response.data;
        } catch (error) {
            throw new HttpException(error.response?.data?.errText || "Помилка під час виконання запиту", HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Створює рахунок для оплати через Monobank.
     * @param {InvoiceCreateRequest} invoiceData - Дані для створення рахунку.
     * @returns {Promise<Invoice>} Відповідь від API з деталями рахунку.
     *
     * @example
     * const invoiceData: InvoiceCreateRequest = {
     *   amount: 1000,
     *   ccy: 980, // UAH
     *   merchantPaymInfo: {
     *     reference: "my_shop_order_28142",
     *     destination: "Оплата за замовлення #28142",
     *     basketOrder: [
     *       {
     *         name: "Товар1",
     *         qty: 2,
     *         sum: 500,
     *         icon: "https://example.com/images/product1.jpg",
     *         unit: "уп."
     *       }
     *     ]
     *   },
     *   redirectUrl: "https://example.com/order-result",
     *   webHookUrl: "https://example.com/mono-webhook",
     *   validity: 3600 * 24 * 7,
     *   paymentType: "debit"
     * };
     *
     * const invoice = await this.monobankService.createInvoice(invoiceData);
     * console.log(invoice.pageUrl);
     */
    public async createInvoice(invoiceData: InvoiceCreateRequest): Promise<Invoice> {
        return this.request<Invoice>("post", "/merchant/invoice/create", invoiceData);
    }

    /**
     * Отримує статус рахунку за його ID.
     * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
     * @returns {Promise<InvoiceStatus>} Поточний статус рахунку.
     * @example
     * const invoiceId = "khsf8723hsdf8923hf";
     * const status = await this.monobankService.getInvoiceStatus(invoiceId);
     * console.log(status.status);
     */
    public async getInvoiceStatus(invoiceId: string): Promise<InvoiceStatus> {
        return this.request<InvoiceStatus>("get", `/merchant/invoice/status?invoiceId=${invoiceId}`);
    }

    /**
     * Відправляє запит на повернення коштів по існуючому рахунку.
     * @param {RefundRequest} refundData - Дані для повернення коштів.
     * @returns {Promise<Refund>} Інформація про статус повернення.
     * @example
     * const refundData: RefundRequest = { ... };
     * const refund = await this.monobankService.refund(refundData);
     * console.log(refund.status);
     */
    public async refund(refundData: RefundRequest): Promise<Refund> {
        return this.request<Refund>("post", "/merchant/invoice/cancel", refundData);
    }

    /**
     * Видаляє рахунок по його ID.
     * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
     * @returns {Promise<void>} Повертає порожній результат.
     * @example
     * const invoiceId = "khsf8723hsdf8923hf";
     * await this.monobankService.cancel(invoiceId);
     */
    public async cancel(invoiceId: string): Promise<void> {
        return this.request<void>("post", "/merchant/invoice/remove", invoiceId);
    }

    /**
     * Завершує утримання коштів за рахунком.
     * @param {CaptureHoldRequest} captureData - Дані для завершення утримання коштів.
     * @returns {Promise<CaptureHold>} Статус завершення утримання.
     * @example
     * const captureData: CaptureHoldRequest = { ... };
     * const capture = await this.monobankService.captureHold(captureData);
     * console.log(capture.status);
     */
    public async captureHold(captureData: CaptureHoldRequest): Promise<CaptureHold> {
        return this.request<CaptureHold>("post", "/merchant/invoice/finalize", captureData);
    }

    /**
     * Отримує виписки по рахунках за заданий період.
     * @param {string} account - Ідентифікатор рахунку (наприклад, номер картки). 0 — основний рахунок в UAH.
     * @param {string} from - Початковий час періоду в форматі Unix time (секунди).
     * @param {string} [to] - Кінцевий час періоду в форматі Unix time (секунди). Якщо не вказано, використовується поточний час.
     * @returns {Promise<Statement>} Список операцій за період.
     * @example
     * const statement = await this.monobankService.items('0', '1680000000', '1681000000');
     * console.log(statement.items);
     */
    public async items(account: string, from: string, to?: string): Promise<Statement> {
        const url = to ? `/merchant/statement/${account}/${from}/${to}` : `/merchant/statement/${account}/${from}`;
        return this.request<Statement>("get", url);
    }

    /**
     * Створює платіж з використанням карткового токена.
     * @param {CardTokenRequest} paymentData - Дані для створення платежу.
     * @returns {Promise<CardToken>} Статус транзакції.
     * @example
     * const paymentData: CardTokenRequest = { ... };
     * const payment = await this.monobankService.createWithCardToken(paymentData);
     * console.log(payment.status);
     */
    public async createWithCardToken(paymentData: CardTokenRequest): Promise<CardToken> {
        return this.request<CardToken>("post", "/merchant/wallet/payment", paymentData);
    }

    /**
     * Отримує список карткових токенів для зазначеного гаманця.
     * @param {string} walletId - Ідентифікатор гаманця.
     * @returns {Promise<CardTokens>} Список карткових токенів.
     * @example
     * const tokens = await this.monobankService.getCardTokens(walletId);
     * console.log(tokens);
     */
    public async getCardTokens(walletId: string): Promise<CardTokens> {
        return this.request<CardTokens>("get", `/merchant/wallet?walletId=${walletId}`);
    }

    /**
     * Видаляє картковий токен.
     * @param {string} cardToken - Ідентифікатор карткового токена.
     * @returns {Promise<void>} Повертає порожній результат.
     * @example
     * await this.monobankService.deleteCardToken(cardToken);
     */
    public async deleteCardToken(cardToken: string): Promise<void> {
        return this.request<void>("delete", `/merchant/wallet/card?cardToken=${cardToken}`);
    }

    /**
     * Отримує фіскальні чеки по рахунку.
     * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
     * @returns {Promise<Checks>} Список фіскальних чеків.
     * @example
     * const checks = await this.monobankService.getFiscalReceipts(invoiceId);
     * console.log(checks);
     */
    public async getFiscalReceipts(invoiceId: string): Promise<Checks> {
        return this.request<Checks>("get", `/merchant/invoice/fiscal-checks?invoiceId=${invoiceId}`);
    }

    /**
     * Отримує деталі про мерчанта, пов’язаного з поточним API-ключем.
     * @returns {Promise<Merchant>} Дані про мерчанта.
     * @example
     * const merchant = await this.monobankService.getMerchant();
     * console.log(merchant.edrpou);
     */
    public async getMerchant(): Promise<Merchant> {
        return this.request<Merchant>("get", "/merchant/details");
    }

    /**
     * Отримує публічний ключ Monobank, який використовується для перевірки підписів.
     * @returns {Promise<{ key: string }>} Об'єкт із публічним ключем.
     * @example
     * const publicKey = await this.monobankService.getPublicKey();
     * console.log(publicKey.key);
     */
    public async getPublicKey(): Promise<{ key: string }> {
        return this.request<{ key: string }>("get", "/merchant/pubkey");
    }
}
