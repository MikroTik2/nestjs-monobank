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
const crypto = require("crypto");
const monobank_constant_1 = require("./monobank.constant");
const interfaces_1 = require("./interfaces");
let MonobankService = class MonobankService {
    constructor(options, httpService) {
        this.options = options;
        this.httpService = httpService;
        this.apiKey = options.apiKey;
        this.apiUrl = monobank_constant_1.DEFAULT_URL;
    }
    async request(method, url, data) {
        var _a, _b;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.request({
                method,
                url: `${this.apiUrl}${url}`,
                headers: {
                    "Content-Type": "application/json",
                    "X-Token": this.apiKey,
                },
                data,
            }));
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException(((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.errText) || "Помилка під час виконання запиту", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    /**
     * Створює рахунок для оплати через Monobank.
     * @param {InvoiceCreateRequest} invoiceData - Дані для створення рахунку.
     * @returns {Promise<Invoice>} Відповідь від API з деталями рахунку.
     *
     * @example
     * const invoiceData: InvoiceCreateRequest = {
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
     * const invoice = await this.monobankService.createInvoice(invoiceData);
     * console.log(invoice.pageUrl);
     */
    async createInvoice(invoiceData) {
        return this.request("post", "/merchant/invoice/create", invoiceData);
    }
    /**
     * Отримує статус рахунку за його ID.
     * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
     * @returns {Promise<InvoiceStatus>} Поточний статус рахунку.
     * @example
     * const invoiceId = "khsf8723hsdf8923hf";
     * const status = await this.monobankService.getInvoiceStatus(invoiceId);
     * console.log(status.status);
     */
    async getInvoiceStatus(invoiceId) {
        return this.request("get", `/merchant/invoice/status?invoiceId=${invoiceId}`);
    }
    /**
     * Відправляє запит на повернення коштів по існуючому рахунку.
     * @param {RefundRequest} refundData - Дані для повернення коштів.
     * @returns {Promise<Refund>} Інформація про статус повернення.
     * @example
     * const refundData: RefundRequest = { ... };
     * const refund = await this.monobankService.refund(refundData);
     * console.log(refund.status);
     */
    async refund(refundData) {
        return this.request("post", "/merchant/invoice/cancel", refundData);
    }
    /**
     * Видаляє рахунок по його ID.
     * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
     * @returns {Promise<void>} Повертає порожній результат.
     * @example
     * const invoiceId = "khsf8723hsdf8923hf";
     * await this.monobankService.cancel(invoiceId);
     */
    async cancel(invoiceId) {
        return this.request("post", "/merchant/invoice/remove", invoiceId);
    }
    /**
     * Завершує утримання коштів за рахунком.
     * @param {CaptureHoldRequest} captureData - Дані для завершення утримання коштів.
     * @returns {Promise<CaptureHold>} Статус завершення утримання.
     * @example
     * const captureData: CaptureHoldRequest = { ... };
     * const capture = await this.monobankService.captureHold(captureData);
     * console.log(capture.status);
     */
    async captureHold(captureData) {
        return this.request("post", "/merchant/invoice/finalize", captureData);
    }
    /**
     * Отримує виписки по рахунках за заданий період.
     * @param {string} account - Ідентифікатор рахунку (наприклад, номер картки). 0 — основний рахунок в UAH.
     * @param {string} from - Початковий час періоду в форматі Unix time (секунди).
     * @param {string} [to] - Кінцевий час періоду в форматі Unix time (секунди). Якщо не вказано, використовується поточний час.
     * @returns {Promise<Statement>} Список операцій за період.
     * @example
     * const statement = await this.monobankService.items('0', '1680000000', '1681000000');
     * console.log(statement.items);
     */
    async items(account, from, to) {
        const url = to ? `/merchant/statement/${account}/${from}/${to}` : `/merchant/statement/${account}/${from}`;
        return this.request("get", url);
    }
    /**
     * Створює платіж з використанням карткового токена.
     * @param {CardTokenRequest} paymentData - Дані для створення платежу.
     * @returns {Promise<CardToken>} Статус транзакції.
     * @example
     * const paymentData: CardTokenRequest = { ... };
     * const payment = await this.monobankService.createWithCardToken(paymentData);
     * console.log(payment.status);
     */
    async createWithCardToken(paymentData) {
        return this.request("post", "/merchant/wallet/payment", paymentData);
    }
    /**
     * Отримує список карткових токенів для зазначеного гаманця.
     * @param {string} walletId - Ідентифікатор гаманця.
     * @returns {Promise<CardTokens>} Список карткових токенів.
     * @example
     * const tokens = await this.monobankService.getCardTokens(walletId);
     * console.log(tokens);
     */
    async getCardTokens(walletId) {
        return this.request("get", `/merchant/wallet?walletId=${walletId}`);
    }
    /**
     * Видаляє картковий токен.
     * @param {string} cardToken - Ідентифікатор карткового токена.
     * @returns {Promise<void>} Повертає порожній результат.
     * @example
     * await this.monobankService.deleteCardToken(cardToken);
     */
    async deleteCardToken(cardToken) {
        return this.request("delete", `/merchant/wallet/card?cardToken=${cardToken}`);
    }
    /**
     * Отримує фіскальні чеки по рахунку.
     * @param {string} invoiceId - Унікальний ідентифікатор рахунку.
     * @returns {Promise<Checks>} Список фіскальних чеків.
     * @example
     * const checks = await this.monobankService.getFiscalReceipts(invoiceId);
     * console.log(checks);
     */
    async getFiscalReceipts(invoiceId) {
        return this.request("get", `/merchant/invoice/fiscal-checks?invoiceId=${invoiceId}`);
    }
    /**
     * Отримує деталі про мерчанта, пов’язаного з поточним API-ключем.
     * @returns {Promise<Merchant>} Дані про мерчанта.
     * @example
     * const merchant = await this.monobankService.getMerchant();
     * console.log(merchant.edrpou);
     */
    async getMerchant() {
        return this.request("get", "/merchant/details");
    }
    /**
     * Отримує публічний ключ Monobank, який використовується для перевірки підписів.
     * @returns {Promise<{ key: string }>} Об'єкт із публічним ключем.
     * @example
     * const publicKey = await this.monobankService.getPublicKey();
     * console.log(publicKey.key);
     */
    async getPublicKey() {
        return this.request("get", "/merchant/pubkey");
    }
    /**
     * Перевіряє підпис вебхука, використовуючи публічний ключ Monobank.
     * @param {string} rawBody - Сирове тіло запиту (без парсингу).
     * @param {string} xSignBase64 - Підпис з заголовка X-Signature у форматі base64.
     * @returns {Promise<boolean>} Чи є підпис дійсним.
     *
     * @example
     * const isValid = await this.monobankService.verifyWebhookSignature(rawBody, xSign);
     * if (!isValid) throw new ForbiddenException("Невірний підпис");
     */
    async verifyWebhookSignature(rawBody, xSignBase64) {
        const { key: publicKeyPem } = await this.getPublicKey();
        const verifier = crypto.createVerify("SHA256");
        verifier.update(rawBody);
        verifier.end();
        const signature = Buffer.from(xSignBase64, "base64");
        try {
            return verifier.verify(publicKeyPem, signature);
        }
        catch (_a) {
            return false;
        }
    }
};
exports.MonobankService = MonobankService;
exports.MonobankService = MonobankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(interfaces_1.MonobankOptionsSymbol)),
    __metadata("design:paramtypes", [Object, axios_1.HttpService])
], MonobankService);
