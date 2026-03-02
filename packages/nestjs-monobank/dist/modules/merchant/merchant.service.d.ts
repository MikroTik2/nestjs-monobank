import type { MerchantResponse, PubkeyResponse } from './interfaces';
import { MonobankHttpClient } from "../../core/http/monobank.http-client";
export declare class MerchantService {
    private readonly http;
    constructor(http: MonobankHttpClient);
    /**
    * Отримує публічний ключ мерчанта Monobank.
    *
    * Публічний ключ використовується для:
    * - верифікації підписів webhook-повідомлень
    * - перевірки автентичності даних від Monobank
    *
    * @returns {Promise<PubkeyResponse>} Публічний RSA-ключ мерчанта.
    *
    * @example
    * const pubkey = await this.monobankService.merchant.getMerchantPubkey();
    * console.log(pubkey.key);
    */
    getMerchantPubkey(): Promise<PubkeyResponse>;
    /**
    * Отримує детальну інформацію про мерчанта Monobank.
    *
    * Метод повертає основні дані облікового запису мерчанта:
    * - ідентифікатор мерчанта
    * - назву
    * - доступні налаштування
    * - інформацію для інтеграції
    *
    * @returns {Promise<MerchantResponse>} Дані мерчанта.
    *
    * @example
    * const merchant = await this.monobankService.merchant.getMerchant();
    * console.log(merchant.name);
    */
    getMerchant(): Promise<MerchantResponse>;
}
