import { HttpService } from "@nestjs/axios";
import { type InvoiceCreateRequest, type InvoiceDetails, type MonobankOptions } from "../interfaces";
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
}
