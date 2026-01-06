import { type DynamicModule } from "@nestjs/common";
import { type MonobankModuleAsyncOptions, type MonobankModuleOptions } from './common/interfaces';
export declare class MonobankModule {
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
    static forRoot(options: MonobankModuleOptions): DynamicModule;
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
    static forRootAsync(options: MonobankModuleAsyncOptions): DynamicModule;
}
