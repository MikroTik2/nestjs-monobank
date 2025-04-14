import { type DynamicModule } from "@nestjs/common";
import { type MonobankAsyncOptions, type MonobankOptions } from "./interfaces";
export declare class MonobankModule {
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
    static forRoot(options: MonobankOptions): DynamicModule;
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
    static forRootAsync(options: MonobankAsyncOptions): DynamicModule;
}
