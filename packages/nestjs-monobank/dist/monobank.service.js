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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonobankService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const monobank_constant_1 = require("./monobank.constant");
const interfaces_1 = require("./interfaces");
let MonobankService = class MonobankService {
    constructor(options, httpService) {
        this.options = options;
        this.httpService = httpService;
        this.apiKey = options.apiKey;
        this.apiUrl = monobank_constant_1.DEFAULT_URL;
    }
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
    async createInvoice(invoiceData) {
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${this.apiUrl}/merchant/invoice/create`, invoiceData, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Token": this.apiKey,
                },
            }));
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException(error.response.data.errText || "Помилка під час виконання запиту", common_1.HttpStatus.BAD_REQUEST);
        }
    }
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
    async getInvoiceStatus(invoiceId) {
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.apiUrl}/merchant/invoice/status?invoiceId=${invoiceId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Token": this.apiKey,
                },
            }));
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException(error.response.data.errText || "Помилка під час виконання запиту", common_1.HttpStatus.BAD_REQUEST);
        }
    }
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
    async cancelPayment(invoiceData) {
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${this.apiUrl}/merchant/invoice/cancel`, invoiceData, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Token": this.apiKey,
                },
            }));
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException(error.response.data.errText || "Помилка під час виконання запиту", common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.MonobankService = MonobankService;
exports.MonobankService = MonobankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(interfaces_1.MonobankOptionsSymbol)),
    __metadata("design:paramtypes", [Object, axios_1.HttpService])
], MonobankService);
