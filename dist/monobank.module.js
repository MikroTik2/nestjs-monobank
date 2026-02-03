"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MonobankModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonobankModule = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("./common/interfaces");
const monobank_service_1 = require("./monobank.service");
const invoice_module_1 = require("./modules/invoice/invoice.module");
const merchant_module_1 = require("./modules/merchant/merchant.module");
const refund_module_1 = require("./modules/refund/refund.module");
const statement_module_1 = require("./modules/statement/statement.module");
const wallet_module_1 = require("./modules/wallet/wallet.module");
const webhook_module_1 = require("./modules/webhook/webhook.module");
const monobank_http_client_1 = require("./core/http/monobank.http-client");
const subscription_module_1 = require("./modules/subscription/subscription.module");
let MonobankModule = MonobankModule_1 = class MonobankModule {
    /**
     * Метод для реєстрації модуля з синхронними параметрами.
     * Цей метод використовується для конфігурації модуля з наперед заданими параметрами.
     * @param {MonobankModuleOptions} options - Налаштування для конфігурації Monobank API.
     * @returns {DynamicModule} Повертає динамічний модуль з необхідними провайдерами та імпортами.
     *
     * @example
     * ```ts
     * MonobankModule.forRoot({
     *   apiKey: configService.getOrThrow('MONOBANK_API_KEY')
     * });
     * ```
     */
    static forRoot(options) {
        return {
            module: MonobankModule_1,
            imports: [
                invoice_module_1.InvoiceModule,
                merchant_module_1.MerchantModule,
                refund_module_1.RefundModule,
                statement_module_1.StatementModule,
                wallet_module_1.WalletModule,
                subscription_module_1.SubscriptionModule,
                webhook_module_1.WebhookModule
            ],
            providers: [
                {
                    provide: interfaces_1.MonobankOptionsSymbol,
                    useValue: options,
                },
                {
                    provide: monobank_http_client_1.MonobankHttpClient,
                    useFactory: (cfg) => new monobank_http_client_1.MonobankHttpClient(cfg),
                    inject: [interfaces_1.MonobankOptionsSymbol]
                },
                monobank_service_1.MonobankService,
            ],
            exports: [monobank_service_1.MonobankService, monobank_http_client_1.MonobankHttpClient],
            global: true,
        };
    }
    /**
     * Метод для реєстрації модуля з асинхронною конфігурацією.
     * Цей метод використовується для конфігурації модуля з параметрами, які будуть передані через фабричну функцію.
     * @param {MonobankModuleAsyncOptions} options - Асинхронні параметри для конфігурації Monobank API.
     * @returns {DynamicModule} Повертає динамічний модуль з необхідними провайдерами та імпортами.
     *
     * @example
     * ```ts
     * MonobankModule.forRootAsync({
     *   imports: [ConfigModule],
     *   useFactory: async (configService: ConfigService) => ({
     *     apiKey: configService.getOrThrow('MONOBANK_API_KEY')
     *   }),
     *   inject: [ConfigService]
     * });
     * ```
     */
    static forRootAsync(options) {
        return {
            module: MonobankModule_1,
            imports: [
                ...(options.imports || []),
                invoice_module_1.InvoiceModule,
                merchant_module_1.MerchantModule,
                refund_module_1.RefundModule,
                statement_module_1.StatementModule,
                wallet_module_1.WalletModule,
                webhook_module_1.WebhookModule,
                subscription_module_1.SubscriptionModule,
                invoice_module_1.InvoiceModule
            ],
            providers: [
                {
                    provide: interfaces_1.MonobankOptionsSymbol,
                    useFactory: options.useFactory,
                    inject: options.inject || []
                },
                {
                    provide: monobank_http_client_1.MonobankHttpClient,
                    useFactory: (cfg) => new monobank_http_client_1.MonobankHttpClient(cfg),
                    inject: [interfaces_1.MonobankOptionsSymbol]
                },
                monobank_service_1.MonobankService
            ],
            exports: [monobank_service_1.MonobankService, monobank_http_client_1.MonobankHttpClient],
            global: true
        };
    }
};
exports.MonobankModule = MonobankModule;
exports.MonobankModule = MonobankModule = MonobankModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], MonobankModule);
