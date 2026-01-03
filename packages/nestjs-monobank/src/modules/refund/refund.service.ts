import { Injectable } from "@nestjs/common";
import { MonobankHttpClient } from "../../core/http/monobank.http-client";
import type { CreateRefundRequest, CreateRefundResponse } from './interfaces'

@Injectable()
export class RefundService {
     public constructor(
          private readonly http: MonobankHttpClient
     ) {}

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
     public async cancel(data: CreateRefundRequest): Promise<CreateRefundResponse> {
          return this.http.post("/merchant/invoice/cancel", data)
     }
}