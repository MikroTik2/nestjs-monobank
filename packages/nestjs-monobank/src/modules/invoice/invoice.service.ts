import { Injectable } from "@nestjs/common";
import type { 
	CreateChargeRequest,
	CreateCancelRequest,
	CreateFinalizeRequest, 
	CreateFinalizeResponse, 
	CreateInvoiceRequest, 
	CreateInvoiceResponse, 
	CreateCancelResponse,
	FiscalChecksResponse,
	InvoiceStatus, 
	ReceiptResponse
} from './interfaces'
import { MonobankHttpClient } from "../../core/http/monobank.http-client";
import { CreateChargeResponse } from "./interfaces/responses/create-charge.response";

@Injectable()
export class InvoiceService {
	public constructor(private readonly http: MonobankHttpClient) {}

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
	public async create(data: CreateInvoiceRequest): Promise<CreateInvoiceResponse> {
		return this.http.post('/merchant/invoice/create', data)
	}

	/**
	 * Проводить прямий платеж через Monobank.
	 * @param {CreateChargeRequest} data - Дані для проведення прямого платежу.
	 * @returns {Promise<CreateChargeResponse>} Відповідь від API з деталями платежу.
	 * @example
	 * const data: CreateChargeRequest = {
	 *   amount: 1000,
	 *   ccy: 980,
	 *   cardData: {
	 *     pan: "1234567890123456",
	 *     exp: "1226",
	 *     cvv: 123
	 *   },
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
	 *   webhookUrl: "https://example.com/mono-webhook",
	 *   redirectUrl: "https://example.com/order-result",
	 *   paymentType: "debit",
	 *   initiationKind: "merchant"
	 * };
	 * const charge = await this.monobankService.invoice.charge(data);
	 * console.log(charge.invoiceId);
	 */
	public async charge(data: CreateChargeRequest): Promise<CreateChargeResponse> {
		return this.http.post('/merchant/invoice/payment-direct', data)
	}

	/**
	 * Отримує статус рахунку за його ID.
	 * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
	 * @returns {Promise<InvoiceStatus>} Поточний статус рахунку.
	 * @example
	 * const invoiceId = "khsf8723hsdf8923hf";
	 * const status = await this.monobankService.invoice.getStatus(invoiceId);
	 * console.log(status);
	 */
	public async getStatus(invoiceId: string): Promise<InvoiceStatus> {
		return this.http.get(`/merchant/invoice/status?invoiceId=${invoiceId}`)
	}

	/**
	 * Отримує фіскальні чеки по рахунку.
	 * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
	 * @returns {Promise<FiscalChecksResponse>} Список фіскальних чеків.
	 * @example
	 * const checks = await this.monobankService.invoice.getFiscalReceipts(invoiceId);
	 * console.log(checks);
	 */
	public async getFiscalReceipts(invoiceId: string): Promise<FiscalChecksResponse> {
		return this.http.get(`/merchant/invoice/fiscal-checks?invoiceId=${invoiceId}`)
	}

	/**
	 * Отримує квитанцію по рахунку.
	 * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
	 * @returns {Promise<ReceiptResponse>} Квитанція по рахунку.
	 * @example
	 * const receipt = await this.monobankService.invoice.getReceipt(invoiceId);
	 * console.log(receipt);
	 */
	public async getReceipt(invoiceId: string): Promise<ReceiptResponse> {
		return this.http.get(`/merchant/invoice/receipt?invoiceId=${invoiceId}`)
	}

    /**
     * Завершує утримання коштів за рахунком.
     * @param {CreateFinalizeRequest} data - Дані для завершення утримання коштів.
     * @returns {Promise<CreateFinalizeResponse>} Статус завершення утримання.
     * @example
     * const data: CreateFinalizeRequest = {
     *    invoiceId: "2210012MPLYwJjVUzchj",
     *    amount: 4200
     * };
     * const finalize = await this.monobankService.invoice.finalize(data);
     * console.log(finalize.status);
     */
    public async finalize(data: CreateFinalizeRequest): Promise<CreateFinalizeResponse> {
        return this.http.post('/merchant/invoice/finalize', data)
    }

	/**
	 * Скасовує (повертає) платіж за рахунком Monobank.
	 *
	 * Метод створює заявку на скасування оплати (cancel).
	 * Статус скасування може бути:
	 * - `processing` — заявка в обробці
	 * - `success` — скасування виконано успішно
	 * - `failure` — помилка під час скасування
	 *
	 * @param {CreateCancelRequest} data - Дані для створення запиту на скасування.
	 * @returns {Promise<CreateCancelResponse>} Результат операції скасування.
	 *
	 * @example
	 * const data: CreateCancelRequest = {
	 *   invoiceId: "2210012MPLYwJjVUzchj",
	 *   amount: 1500
	 * };
	 *
	 * const cancel = await this.monobankService.invoice.cancel(data);
	 * console.log(cancel.status);
	*/
	public async cancel(data: CreateCancelRequest): Promise<CreateCancelResponse> {
		return this.http.post("/merchant/invoice/cancel", data)
	}

	/**
	 * Видаляє (анулює) інвойсу Monobank за його ідентифікатором.
	 *
	 * Метод використовується для:
	 * - повного видалення інвойсу
	 * - припинення можливості оплати за інвойсом
	 *
	 * ⚠️ Зазвичай застосовується лише для інвойсів,
	 * які ще не були успішно оплачені.
	 *
	 * @param {string} invoiceId - Унікальний ідентифікатор інвойсу.
	 * @returns {Promise<void>} Результат операції (без тіла відповіді).
	 *
	 * @example
	 * await this.monobankService.invoice.remove("2210012MPLYwJjVUzchj");	
	*/
	public async remove(invoiceId: string): Promise<void> {
		return this.http.post("/merchant/invoice/remove", invoiceId)
	}
}