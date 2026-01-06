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
exports.WalletService = void 0;
const common_1 = require("@nestjs/common");
const monobank_http_client_1 = require("../../core/http/monobank.http-client");
let WalletService = class WalletService {
    constructor(http) {
        this.http = http;
    }
    /**
    * Створює токен картки (Card Token) для збереження платіжної картки.
    *
    * Використовується для:
    * - привʼязки картки клієнта
    * - повторних платежів без повторного введення реквізитів
    * - роботи з wallet-платежами Monobank
    *
    * @param {CreateCardTokenRequest} data - Дані для створення токена картки.
    * @returns {Promise<CreateCardTokenResponse>} Дані створеного токена картки.
    *
    * @example
    * const data: CreateCardTokenRequest = {
    *   amount: 100,
    *   ccy: 980,
    *   redirectUrl: "https://example.com/success",
    *   webHookUrl: "https://example.com/webhook"
    * };
    *
    * const token = await this.monobankService.wallet.create(data);
    * console.log(token.cardToken);
    */
    async create(data) {
        return this.http.post("/merchant/wallet/payment", data);
    }
    /**
    * Отримує інформацію про wallet за його ідентифікатором.
    *
    * @param {string} id - Унікальний ідентифікатор wallet.
    * @returns {Promise<CardTokenResponse>} Дані wallet (привʼязана картка, статус тощо).
    *
    * @example
    * const wallet = await this.monobankService.wallet.getById("wlt_123456");
    * console.log(wallet);
    */
    async getById(id) {
        return this.http.get(`/merchant/wallet?walletId=${id}`);
    }
    /**
    * Видаляє привʼязану картку за токеном.
    *
    * Після видалення:
    * - токен стає недійсним
    * - повторні списання по цій картці неможливі
    *
    * @param {string} token - Токен картки (cardToken).
    * @returns {Promise<void>} Результат операції видалення.
    *
    * @example
    * await this.monobankService.wallet.deleteByToken("card_token_abc123");
    */
    async deleteByToken(token) {
        return this.http.delete(`/merchant/wallet/card?cardToken=${token}`);
    }
};
exports.WalletService = WalletService;
exports.WalletService = WalletService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [monobank_http_client_1.MonobankHttpClient])
], WalletService);
