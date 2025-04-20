import { HttpService } from "@nestjs/axios";
import { type MonobankOptions, type InvoiceStatus, type Invoice, type InvoiceCreateRequest, type CardToken, type CardTokens, type CardTokenRequest, type CaptureHold, type CaptureHoldRequest, type Refund, type RefundRequest, type Statement, type Checks } from "./interfaces";
export declare class MonobankService {
    private readonly options;
    private readonly httpService;
    private readonly apiKey;
    private readonly apiUrl;
    constructor(options: MonobankOptions, httpService: HttpService);
    private request;
    /**
     * Створює рахунок для оплати через Monobank.
     * @param {InvoiceCreateRequest} invoiceData - Дані для створення рахунку.
     * @returns {Promise<InvoiceDetails>} Відповідь від API з деталями рахунку.
     *
     * @example
     * ```ts
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
     * console.log(invoice.pageUrl); // ссылка на оплату
     * ```
     */
    createInvoice(invoiceData: InvoiceCreateRequest): Promise<Invoice>;
    /**
     * Отримує статус рахунку за його ID.
     * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
     * @returns {Promise<InvoiceStatus>} Поточний статус рахунку.
     * @example
     * const invoiceId = "khsf8723hsdf8923hf";
     * const status = await this.monobankService.getInvoiceStatus(invoiceId);
     * console.log(status.status);
     */
    getInvoiceStatus(invoiceId: string): Promise<InvoiceStatus>;
    /**
     * Отправляє запит на повернення коштів по існуючому рахунку.
     * @param {RefundRequest} refundData - Дані для повернення коштів.
     * @returns {Promise<Refund>} Інформація про статус повернення.
     * @example
     * const refundData: RefundRequest = { ... };
     * const refund = await this.monobankService.refund(refundData);
     * console.log(refund.status);
     */
    refund(refundData: RefundRequest): Promise<Refund>;
    /**
     * Видаляє рахунок по його ID.
     * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
     * @returns {Promise<void>} Повертає порожній результат.
     * @example
     * const invoiceId = "khsf8723hsdf8923hf";
     * await this.monobankService.cancel(invoiceId);
     */
    cancel(invoiceId: string): Promise<void>;
    /**
     * Завершує утримання коштів за рахунком.
     * @param {CaptureHoldRequest} captureData - Дані для завершення утримання коштів.
     * @returns {Promise<CaptureHold>} Статус завершення утримання.
     * @example
     * const captureData: CaptureHoldRequest = { ... };
     * const capture = await this.monobankService.captureHold(captureData);
     * console.log(capture.status);
     */
    captureHold(captureData: CaptureHoldRequest): Promise<CaptureHold>;
    /**
     * Отримує виписки по рахунках за заданий період.
     * @param {number} from - Початковий час в Unix форматі.
     * @param {number} [to] - Кінцевий час в Unix форматі.
     * @param {string} [code] - Курсова валюта.
     * @returns {Promise<Statement>} Список операцій за період.
     * @example
     * const statement = await this.monobankService.items(1680000000, 1681000000);
     * console.log(statement.items);
     */
    items(from: number, to?: number, code?: string): Promise<Statement>;
    /**
     * Створює платіж з використанням карткового токена.
     * @param {CardTokenRequest} paymentData - Дані для створення платежу.
     * @returns {Promise<CardToken>} Статус транзакції.
     * @example
     * const paymentData: CardTokenRequest = { ... };
     * const payment = await this.monobankService.createWithCardToken(paymentData);
     * console.log(payment.status);
     */
    createWithCardToken(paymentData: CardTokenRequest): Promise<CardToken>;
    /**
     * Отримує список карткових токенів для зазначеного гаманця.
     * @param {string} walletId - Ідентифікатор гаманця.
     * @returns {Promise<CardTokens>} Список карткових токенів.
     * @example
     * const tokens = await this.monobankService.getCardTokens(walletId);
     * console.log(tokens);
     */
    getCardTokens(walletId: string): Promise<CardTokens>;
    /**
     * Видаляє картковий токен.
     * @param {string} cardToken - Ідентифікатор карткового токена.
     * @returns {Promise<void>} Повертає порожній результат.
     * @example
     * await this.monobankService.deleteCardToken(cardToken);
     */
    deleteCardToken(cardToken: string): Promise<void>;
    /**
     * Отримує фіскальні чеки по рахунку.
     * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
     * @returns {Promise<Checks>} Список фіскальних чеків.
     * @example
     * const checks = await this.monobankService.getFiscalReceipts(invoiceId);
     * console.log(checks);
     */
    getFiscalReceipts(invoiceId: string): Promise<Checks>;
}
