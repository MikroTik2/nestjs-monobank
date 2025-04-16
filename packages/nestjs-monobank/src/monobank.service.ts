import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

import { DEFAULT_URL } from "./monobank.constant";
import {
    MonobankOptionsSymbol,
    type InvoiceStatus,
    type InvoiceCreateRequest,
    type InvoiceDetails,
    type MonobankOptions,
    type InvoiceCancelRequest,
    type InvoiceCancel,
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

    /**
     * Створює рахунок для оплати через Monobank.
     * Цей метод надсилає запит на створення нового рахунку з даними з `invoiceData`.
     * Повертає інформацію про створений рахунок.
     *
     * @param {InvoiceCreateRequest} invoiceData - Дані для створення рахунку.
     * @returns {Promise<InvoiceDetails>} Відповідь від API з деталями рахунку.
     *
     * @example
     * ```ts
     * const invoiceData: InvoiceCreateRequest = {
     *   amount: 1000,
     *   ccy: 980, // UAH
     *   merchantPaymInfo: {
     *     reference: "invoice-123",
     *     destination: "Оплата замовлення #123"
     *   },
     *   redirectUrl: "https://example.com/success"
     * };
     *
     * const invoice = await this.monobankService.createInvoice(invoiceData);
     * console.log(invoice.pageUrl); // ссылка на оплату
     * ```
     */
    public async createInvoice(invoiceData: InvoiceCreateRequest): Promise<InvoiceDetails> {
        try {
            const response = await firstValueFrom(
                this.httpService.post<InvoiceDetails>(`${this.apiUrl}/merchant/invoice/create`, invoiceData, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Token": this.apiKey,
                    },
                }),
            );
            return response.data;
        } catch (error) {
            throw new HttpException(error.response.data.errText || "Помилка під час виконання запиту", HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Отримує статус рахунку за його ID.
     * Цей метод надсилає запит на отримання інформації про статус існуючого рахунку.
     * Повертає деталі рахунку, включаючи його поточний статус.
     *
     * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
     * @returns {Promise<InvoiceStatus>} Відповідь від API з поточним статусом рахунку.
     * @example
     * ```ts
     * const invoiceId = "khsf8723hsdf8923hf";
     * const status = await this.monobankService.getInvoiceStatus(invoiceId);
     * console.log(status.status); // Пример: 'created', 'processing', 'success', 'failure'
     * ```
     */
    public async getInvoiceStatus(invoiceId: string): Promise<InvoiceStatus> {
        try {
            const response = await firstValueFrom(
                this.httpService.get<InvoiceStatus>(`${this.apiUrl}/merchant/invoice/status?invoiceId=${invoiceId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Token": this.apiKey,
                    },
                }),
            );
            return response.data;
        } catch (error) {
            throw new HttpException(error.response.data.errText || "Помилка під час виконання запиту", HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Скасовує інвойс (повністю або частково) за його ID.
     * Може містити дані для фіскалізації.
     *
     * @param {InvoiceCancelRequest} cancelData - Дані для скасування інвойсу.
     * @returns {Promise<InvoiceCancelResponse>} Відповідь з деталями операції скасування.
     *
     * @example
     * ```ts
     * const cancelData: InvoiceCancelRequest = {
     *   invoiceId: 'abc123',
     *   extRef: 'external-ref-001',
     *   amount: 5000,
     *   items: [
     *     {
     *       name: 'Табуретка',
     *       qty: 2,
     *       sum: 2100,
     *       code: 'product-code',
     *       barcode: '1234567890',
     *       header: 'хедер',
     *       footer: 'футер',
     *       tax: [],
     *       uktzed: 'uktzed-code'
     *     }
     *   ]
     * };
     * const result = await this.monobankService.cancelPayment(cancelData);
     * ```
     */
    public async cancelPayment(invoiceData: InvoiceCancelRequest): Promise<InvoiceCancel> {
        try {
            const response = await firstValueFrom(
                this.httpService.post<InvoiceCancel>(`${this.apiUrl}/merchant/invoice/cancel`, invoiceData, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Token": this.apiKey,
                    },
                }),
            );
            return response.data;
        } catch (error) {
            throw new HttpException(error.response.data.errText || "Помилка під час виконання запиту", HttpStatus.BAD_REQUEST);
        }
    }
}
