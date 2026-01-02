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
    async verifyWebhookSignature(rawBody, xSignBase64) {
        const { key: publicKeyBase64 } = await this.merchant.getPubkey();
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
