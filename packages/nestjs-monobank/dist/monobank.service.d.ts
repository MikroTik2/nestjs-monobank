import { HttpService } from "@nestjs/axios";
import { InvoiceStatus, type InvoiceCreateRequest, type InvoiceDetails, type MonobankOptions } from "./interfaces";
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
     */
    createInvoice(invoiceData: InvoiceCreateRequest): Promise<InvoiceDetails>;
    /**
     * Отримує статус рахунку за його ID.
     * Цей метод надсилає запит на отримання інформації про статус існуючого рахунку.
     * Повертає деталі рахунку, включаючи його поточний статус.
     *
     * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
     * @returns {Promise<InvoiceStatus>} Відповідь від API з поточним статусом рахунку.
     */
    getInvoiceStatus(invoiceId: string): Promise<InvoiceStatus>;
}
