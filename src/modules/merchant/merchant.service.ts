import { Injectable } from "@nestjs/common";
import type { MerchantResponse, PubkeyResponse } from './interfaces'
import { MonobankHttpClient } from "../../core/http/monobank.http-client";

@Injectable()
export class MerchantService {
     public constructor(
          private readonly http: MonobankHttpClient
     ) {}

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
	public async getMerchantPubkey(): Promise<PubkeyResponse> {
		 return this.http.get("/merchant/pubkey")
	}

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
     public async getMerchant(): Promise<MerchantResponse> {
          return this.http.get('/merchant/details')
     }
}