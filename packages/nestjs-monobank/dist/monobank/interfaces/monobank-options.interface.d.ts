import type { FactoryProvider, ModuleMetadata } from "@nestjs/common";
export declare const MonobankOptionsSymbol: unique symbol;
/**
 * Тип, що представляє параметри для налаштування Monobank.
 */
export type MonobankOptions = {
    /**
     * Ключ API для автентифікації в Monobank.
     */
    apiKey: string;
};
/**
 * Тип для асинхронного налаштування Monobank.
 */
export type MonobankAsyncOptions = Pick<ModuleMetadata, "imports"> & Pick<FactoryProvider<MonobankOptions>, "useFactory" | "inject">;
