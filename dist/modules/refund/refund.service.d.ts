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
    /**
    * Видаляє (анулює) рахунок Monobank за його ідентифікатором.
    *
    * Метод використовується для:
    * - повного видалення рахунку
    * - припинення можливості оплати за інвойсом
    *
    * ⚠️ Зазвичай застосовується лише для інвойсів,
    * які ще не були успішно оплачені.
    *
    * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
    * @returns {Promise<void>} Результат операції (без тіла відповіді).
    *
    * @example
    * await this.monobankService.refund.remove("2210012MPLYwJjVUzchj");
    */
    remove(invoiceId: string): Promise<void>;
}
