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
exports.RefundService = void 0;
const common_1 = require("@nestjs/common");
const monobank_http_client_1 = require("../../core/http/monobank.http-client");
let RefundService = class RefundService {
    constructor(http) {
        this.http = http;
    }
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
    async cancel(data) {
        return this.http.post("/merchant/invoice/cancel", data);
    }
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
    async remove(invoiceId) {
        return this.http.post("/merchant/invoice/remove", invoiceId);
    }
};
exports.RefundService = RefundService;
exports.RefundService = RefundService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [monobank_http_client_1.MonobankHttpClient])
], RefundService);
