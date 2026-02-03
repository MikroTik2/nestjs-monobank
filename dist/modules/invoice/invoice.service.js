"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const monobank_http_client_1 = require("../../core/http/monobank.http-client");
let InvoiceService = class InvoiceService {
    constructor(http) {
        this.http = http;
    }
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
    async create(data) {
        return this.http.post('/merchant/invoice/create', data);
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
    async getStatus(invoiceId) {
        return this.http.get(`/merchant/invoice/status?invoiceId=${invoiceId}`);
    }
    /**
    * Отримує фіскальні чеки по рахунку.
    * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
    * @returns {Promise<ChecksResponse>} Список фіскальних чеків.
    * @example
    * const checks = await this.monobankService.getFiscalReceipts(invoiceId);
    * console.log(checks);
    */
    async getFiscalReceipts(invoiceId) {
        return this.http.get(`/merchant/invoice/fiscal-checks?invoiceId=${invoiceId}`);
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
    async capture(data) {
        return this.http.post('/merchant/invoice/finalize', data);
    }
};
exports.InvoiceService = InvoiceService;
exports.InvoiceService = InvoiceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [monobank_http_client_1.MonobankHttpClient])
], InvoiceService);
