import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

import { DEFAULT_URL } from "./monobank.constant";
import { MonobankOptionsSymbol, type InvoiceCreateRequest, type InvoiceDetails, type MonobankOptions } from "./interfaces";

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
}
