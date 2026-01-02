import type { FactoryProvider, ModuleMetadata } from "@nestjs/common";

export const MonobankOptionsSymbol = Symbol();

/**
 * Тип, що представляє параметри для налаштування Monobank.
 */
export type MonobankModuleOptions = {
    /**
     * Ключ API для автентифікації в Monobank.
     */
    apiKey: string; // Токен доступу або тестовий токен з особистого кабінету Monobank
};

/**
 * Тип для асинхронного налаштування Monobank.
 */
export type MonobankModuleAsyncOptions = Pick<ModuleMetadata, "imports"> & Pick<FactoryProvider<MonobankModuleOptions>, "useFactory" | "inject">;
