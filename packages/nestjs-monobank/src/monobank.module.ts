import { HttpModule } from "@nestjs/axios";
import { type DynamicModule, Global, Module } from "@nestjs/common";
import {
	type MonobankModuleAsyncOptions,
	type MonobankModuleOptions,
	MonobankOptionsSymbol
} from './common/interfaces'

import { MonobankService } from "./monobank.service";
import { InvoiceModule } from './modules/invoice/invoice.module'
import { MerchantModule } from './modules/merchant/merchant.module'
import { RefundModule } from './modules/refund/refund.module'
import { StatementModule } from './modules/statement/statement.module'
import { WalletModule } from './modules/wallet/wallet.module'
import { WebhookModule } from './modules/webhook/webhook.module'
import { MonobankHttpClient } from './core/http/monobank.http-client'

@Global()
@Module({})
export class MonobankModule {
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
    public static forRoot(options: MonobankModuleOptions): DynamicModule {
        return {
            module: MonobankModule,
            imports: [
				InvoiceModule,
				MerchantModule,
				RefundModule,
				StatementModule,
				WalletModule,
				WebhookModule
			],
            providers: [
                {
                    provide: MonobankOptionsSymbol,
                    useValue: options,
                },
				{
					provide: MonobankHttpClient,
					useFactory: (cfg: MonobankModuleOptions) => new MonobankHttpClient(cfg),
					inject: [MonobankOptionsSymbol]
				},

                MonobankService,
            ],
            exports: [MonobankService, MonobankHttpClient],
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
    public static forRootAsync(options: MonobankModuleAsyncOptions): DynamicModule {
        return {
			module: MonobankModule,
			imports: [
				...(options.imports || []),
				InvoiceModule,
				MerchantModule,
				RefundModule,
				StatementModule,
				WalletModule,
				WebhookModule,
				InvoiceModule
			],
			providers: [
				{
					provide: MonobankOptionsSymbol,
					useFactory: options.useFactory,
					inject: options.inject || []
				},

				{
					provide: MonobankHttpClient,
					useFactory: (cfg: MonobankModuleOptions) =>
						new MonobankHttpClient(cfg),
					inject: [MonobankOptionsSymbol]
				},

				MonobankService
			],
			exports: [MonobankService, MonobankHttpClient],
			global: true
        };
    }
}
