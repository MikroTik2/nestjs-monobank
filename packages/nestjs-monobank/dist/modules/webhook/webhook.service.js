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
exports.WebhookService = void 0;
const common_1 = require("@nestjs/common");
const merchant_service_1 = require("../merchant/merchant.service");
const crypto = require("crypto");
let WebhookService = class WebhookService {
    constructor(merchant) {
        this.merchant = merchant;
    }
    /**
    * Верифікує підпис webhook-повідомлення від Monobank.
    *
    * Метод:
    * 1. Отримує публічний ключ мерчанта через Merchant API
    * 2. Декодує підпис з Base64
    * 3. Перевіряє цифровий підпис за алгоритмом SHA256
    *
    * Використовується для гарантії, що webhook:
    * - дійсно надісланий Monobank
    * - не був змінений під час передачі
    *
    * @param {Buffer} rawBody - Сире тіло HTTP-запиту (без JSON.parse).
    * @param {string} xSignBase64 - Значення заголовка `X-Sign` у форматі Base64.
    *
    * @returns {Promise<boolean>}
    * - `true` — підпис валідний
    * - `false` — підпис невалідний
    *
    * @example
    * // controller.ts
    * @Post('/mono-webhook')
    * async handleWebhook(
    *   @Headers('x-sign') xSign: string,
    *   @Req() req: RawBodyRequest<Request>
    * ) {
    *   const isValid = await this.webhookService.verifyWebhookSignature(
    *     req.rawBody,
    *     xSign
    *   );
    *
    *   if (!isValid) {
    *     throw new UnauthorizedException('Invalid webhook signature');
    *   }
    *
    *   // обробка події
    * }
    */
    async verifyWebhookSignature(rawBody, xSignBase64) {
        const { key: publicKeyBase64 } = await this.merchant.getMerchantPubkey();
        const sign = Buffer.from(xSignBase64, "base64");
        const publicKey = Buffer.from(publicKeyBase64, "base64");
        const verifier = crypto.createVerify("SHA256");
        verifier.write(rawBody);
        verifier.end();
        return verifier.verify({ key: publicKey, format: "pem", type: "spki" }, sign);
    }
};
exports.WebhookService = WebhookService;
exports.WebhookService = WebhookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [merchant_service_1.MerchantService])
], WebhookService);
