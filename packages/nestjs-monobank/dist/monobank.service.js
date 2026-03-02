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
exports.MonobankService = void 0;
const common_1 = require("@nestjs/common");
const invoice_service_1 = require("./modules/invoice/invoice.service");
const merchant_service_1 = require("./modules/merchant/merchant.service");
const statement_service_1 = require("./modules/statement/statement.service");
const wallet_service_1 = require("./modules/wallet/wallet.service");
const subscription_service_1 = require("./modules/subscription/subscription.service");
const webhook_service_1 = require("./modules/webhook/webhook.service");
const qr_service_1 = require("./modules/qr/qr.service");
let MonobankService = class MonobankService {
    constructor(invoices, merchants, statements, wallets, qr, subscriptions, webhook) {
        this.invoices = invoices;
        this.merchants = merchants;
        this.statements = statements;
        this.wallets = wallets;
        this.qr = qr;
        this.subscriptions = subscriptions;
        this.webhook = webhook;
    }
};
exports.MonobankService = MonobankService;
exports.MonobankService = MonobankService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [invoice_service_1.InvoiceService,
        merchant_service_1.MerchantService,
        statement_service_1.StatementService,
        wallet_service_1.WalletService,
        qr_service_1.QrService,
        subscription_service_1.SubscriptionService,
        webhook_service_1.WebhookService])
], MonobankService);
