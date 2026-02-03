import type { ChecksResponse, CreateCaptureHoldRequest, CreateCaptureHoldResponse, CreateInvoiceRequest, CreateInvoiceResponse, InvoiceStatus } from './interfaces';
import { MonobankHttpClient } from "../../core/http/monobank.http-client";
export declare class InvoiceService {
    private readonly http;
    constructor(http: MonobankHttpClient);
    /**
     * Створює рахунок для оплати через Monobank.
     * @param {CreateInvoiceRequest} data - Дані для створення рахунку.
     * @returns {Promise<CreateInvoiceResponse>} Відповідь від API з деталями рахунку.
     *
     * @example
     * const invoiceData: CreateInvoiceRequest = {
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
     * const invoice = await this.monobankService.invoice.create(data);
     * console.log(invoice.pageUrl);
     */
    create(data: CreateInvoiceRequest): Promise<CreateInvoiceResponse>;
    /**
     * Отримує статус рахунку за його ID.
     * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
     * @returns {Promise<InvoiceStatus>} Поточний статус рахунку.
     * @example
     * const invoiceId = "khsf8723hsdf8923hf";
     * const status = await this.monobankService.invoice.getStatus(invoiceId);
     * console.log(status);
     */
    getStatus(invoiceId: string): Promise<InvoiceStatus>;
    /**
    * Отримує фіскальні чеки по рахунку.
    * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
    * @returns {Promise<ChecksResponse>} Список фіскальних чеків.
    * @example
    * const checks = await this.monobankService.getFiscalReceipts(invoiceId);
    * console.log(checks);
    */
    getFiscalReceipts(invoiceId: string): Promise<ChecksResponse>;
    /**
     * Завершує утримання коштів за рахунком.
     * @param {CreateCaptureHoldRequest} data - Дані для завершення утримання коштів.
     * @returns {Promise<CreateCaptureHoldResponse>} Статус завершення утримання.
     * @example
     * const data: CreateCaptureHoldRequest = {
     *    invoiceId: "2210012MPLYwJjVUzchj",
     *    amount: 4200
     * };
     * const capture = await this.monobankService.invoice.capture(data);
     * console.log(capture.status);
     */
    capture(data: CreateCaptureHoldRequest): Promise<CreateCaptureHoldResponse>;
}
