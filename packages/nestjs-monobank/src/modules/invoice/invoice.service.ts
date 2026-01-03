import { Injectable } from "@nestjs/common";
import type { 
     ChecksResponse,
     CreateCaptureHoldRequest, 
     CreateCaptureHoldResponse, 
     CreateInvoiceRequest, 
     CreateInvoiceResponse, 
     InvoiceStatus 
} from './interfaces'
import { MonobankHttpClient } from "../../core/http/monobank.http-client";

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
	public async create(
		data: CreateInvoiceRequest
	): Promise<CreateInvoiceResponse> {
		return this.http.post('/merchant/invoice/create', data)
	}

	/**
	 * Отримує статус рахунку за його ID.
	 * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
	 * @returns {Promise<InvoiceStatus>} Поточний статус рахунку.
	 * @example
	 * const invoiceId = "khsf8723hsdf8923hf";
	 * const status = await this.monobankService.invouce.status(invoiceId);
	 * console.log(status);
	 */
	public async status(invoiceId: string): Promise<InvoiceStatus> {
		return this.http.get(`/merchant/invoice/status?invoiceId=${invoiceId}`)
	}

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
	public async capture(data: CreateCaptureHoldRequest): Promise<CreateCaptureHoldResponse> {
		return this.http.post('/merchant/invoice/finalize', data)
	}

	 /**
	 * Отримує фіскальні чеки по рахунку.
	 * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
	 * @returns {Promise<ChecksResponse>} Список фіскальних чеків.
	 * @example
	 * const checks = await this.monobankService.getFiscalReceipts(invoiceId);
	 * console.log(checks);
	 */
	public async checks(invoiceId: string): Promise<ChecksResponse> {
		return this.http.get(`/merchant/invoice/fiscal-checks?invoiceId=${invoiceId}`)
	}
}