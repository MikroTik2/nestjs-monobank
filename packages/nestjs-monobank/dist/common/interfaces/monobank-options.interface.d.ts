import type { FactoryProvider, ModuleMetadata } from "@nestjs/common";
export declare const MonobankOptionsSymbol: unique symbol;
/**
 * Тип, що представляє параметри для налаштування Monobank.
 */
export type MonobankModuleOptions = {
    /**
     * Ключ API для автентифікації в Monobank.
     */
    apiKey: string;
};
/**
 * Тип для асинхронного налаштування Monobank.
 */
export type MonobankModuleAsyncOptions = Pick<ModuleMetadata, "imports"> & Pick<FactoryProvider<MonobankModuleOptions>, "useFactory" | "inject">;
