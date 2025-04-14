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
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const interfaces_1 = require("./interfaces");
const services_1 = require("./services");
let MonobankModule = MonobankModule_1 = class MonobankModule {
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
    static forRoot(options) {
        return {
            module: MonobankModule_1,
            imports: [axios_1.HttpModule],
            providers: [
                {
                    provide: interfaces_1.MonobankOptionsSymbol,
                    useValue: options,
                },
                services_1.MonobankService,
            ],
            exports: [services_1.MonobankService],
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
    static forRootAsync(options) {
        return {
            module: MonobankModule_1,
            imports: [axios_1.HttpModule, ...(options.imports || [])],
            providers: [
                {
                    provide: interfaces_1.MonobankOptionsSymbol,
                    useFactory: options.useFactory,
                    inject: options.inject || [],
                },
                services_1.MonobankService,
            ],
            exports: [services_1.MonobankService],
            global: true,
        };
    }
};
exports.MonobankModule = MonobankModule;
exports.MonobankModule = MonobankModule = MonobankModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], MonobankModule);
