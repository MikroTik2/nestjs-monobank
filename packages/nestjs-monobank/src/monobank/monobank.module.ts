import { HttpModule } from "@nestjs/axios";
import { type DynamicModule, Global, Module } from "@nestjs/common";
import { type MonobankAsyncOptions, type MonobankOptions, MonobankOptionsSymbol } from "./interfaces";
import { MonobankService } from "./services";

@Global()
@Module({})
export class MonobankModule {
    /**
     * Метод для реєстрації модуля з синхронними параметрами.
     * Цей метод використовується для конфігурації модуля з наперед заданими параметрами.
     * @param {MonobankOptions} options - Налаштування для конфігурації Monobank API.
     * @returns {DynamicModule} Повертає динамічний модуль з необхідними провайдерами та імпортами.
     *
     * @example
     * ```ts
     * MonobankModule.forRoot({
     *   apiKey: 'your_monobank_key',
     * });
     * ```
     */
    public static forRoot(options: MonobankOptions): DynamicModule {
        return {
            module: MonobankModule,
            imports: [HttpModule],
            providers: [
                {
                    provide: MonobankOptionsSymbol,
                    useValue: options,
                },
                MonobankService,
            ],
            exports: [MonobankService],
            global: true,
        };
    }

    /**
     * Метод для реєстрації модуля з асинхронною конфігурацією.
     * Цей метод використовується для конфігурації модуля з параметрами, які будуть передані через фабричну функцію.
     * @param {MonobankAsyncOptions} options - Асинхронні параметри для конфігурації Monobank API.
     * @returns {DynamicModule} Повертає динамічний модуль з необхідними провайдерами та імпортами.
     *
     * @example
     * ```ts
     * MonobankModule.forRootAsync({
     *   imports: [ConfigModule],
     *   useFactory: async (configService: ConfigService) => ({
     *     token: configService.getOrThrow('MONOBANK_TOKEN')
     *   }),
     *   inject: [ConfigService]
     * });
     * ```
     */
    public static forRootAsync(options: MonobankAsyncOptions): DynamicModule {
        return {
            module: MonobankModule,
            imports: [HttpModule, ...(options.imports || [])],
            providers: [
                {
                    provide: MonobankOptionsSymbol,
                    useFactory: options.useFactory,
                    inject: options.inject || [],
                },
                MonobankService,
            ],
            exports: [MonobankService],
            global: true,
        };
    }
}
