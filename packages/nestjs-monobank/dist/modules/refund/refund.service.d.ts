import { MonobankHttpClient } from "../../core/http/monobank.http-client";
import type { CreateRefundRequest, CreateRefundResponse } from './interfaces';
export declare class RefundService {
    private readonly http;
    constructor(http: MonobankHttpClient);
    /**
    * Скасовує (повертає) платіж за рахунком Monobank.
    *
    * Метод створює заявку на скасування оплати (refund).
    * Статус повернення може бути:
    * - `processing` — заявка в обробці
    * - `success` — повернення виконано успішно
    * - `failure` — помилка під час скасування
    *
    * @param {CreateRefundRequest} data - Дані для створення запиту на скасування.
    * @returns {Promise<CreateRefundResponse>} Результат операції повернення.
    *
    * @example
    * const data: CreateRefundRequest = {
    *   invoiceId: "2210012MPLYwJjVUzchj",
    *   amount: 1500
    * };
    *
    * const refund = await this.monobankService.refund.cancel(data);
    * console.log(refund.status);
    */
    cancel(data: CreateRefundRequest): Promise<CreateRefundResponse>;
}
