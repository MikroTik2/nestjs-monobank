import { HttpService } from "@nestjs/axios";
import { type InvoiceStatus, type InvoiceCreateRequest, type InvoiceDetails, type MonobankOptions, type InvoiceCancelRequest, type InvoiceCancel } from "./interfaces";
export declare class MonobankService {
    private readonly options;
    private readonly httpService;
    private readonly apiKey;
    private readonly apiUrl;
    constructor(options: MonobankOptions, httpService: HttpService);
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
    createInvoice(invoiceData: InvoiceCreateRequest): Promise<InvoiceDetails>;
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
    getInvoiceStatus(invoiceId: string): Promise<InvoiceStatus>;
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
    cancelPayment(invoiceData: InvoiceCancelRequest): Promise<InvoiceCancel>;
}
