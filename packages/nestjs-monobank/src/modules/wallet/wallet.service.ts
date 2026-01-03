import { Injectable } from "@nestjs/common";
import { MonobankHttpClient } from "../../core/http/monobank.http-client";
import type {
	CardTokenResponse,
	CreateCardTokenRequest,
	CreateCardTokenResponse
} from './interfaces'

@Injectable()
export class WalletService {
     public constructor(
          public readonly http: MonobankHttpClient
     ) {}

	 /**
	 * Створює токен картки (Card Token) для збереження платіжної картки.
	 *
	 * Використовується для:
	 * - привʼязки картки клієнта
	 * - повторних платежів без повторного введення реквізитів
	 * - роботи з wallet-платежами Monobank
	 *
	 * @param {CreateCardTokenRequest} data - Дані для створення токена картки.
	 * @returns {Promise<CreateCardTokenResponse>} Дані створеного токена картки.
	 *
	 * @example
	 * const data: CreateCardTokenRequest = {
	 *   amount: 100,
	 *   ccy: 980,
	 *   redirectUrl: "https://example.com/success",
	 *   webHookUrl: "https://example.com/webhook"
	 * };
	 *
	 * const token = await this.monobankService.wallet.create(data);
	 * console.log(token.cardToken);
	 */
     public async create(data: CreateCardTokenRequest): Promise<CreateCardTokenResponse> {
		 return this.http.post("/merchant/wallet/payment", data)
     }

	 /**
	 * Отримує інформацію про wallet за його ідентифікатором.
	 *
	 * @param {string} id - Унікальний ідентифікатор wallet.
	 * @returns {Promise<CardTokenResponse>} Дані wallet (привʼязана картка, статус тощо).
	 *
	 * @example
	 * const wallet = await this.monobankService.wallet.getById("wlt_123456");
	 * console.log(wallet);
	 */
	 public async getById(id: string): Promise<CardTokenResponse> {
		 return this.http.get(`/merchant/wallet?walletId=${id}`)
	 }

	 /**
	 * Видаляє привʼязану картку за токеном.
	 *
	 * Після видалення:
	 * - токен стає недійсним
	 * - повторні списання по цій картці неможливі
	 *
	 * @param {string} token - Токен картки (cardToken).
	 * @returns {Promise<void>} Результат операції видалення.
	 *
	 * @example
	 * await this.monobankService.wallet.deleteByToken("card_token_abc123");
	 */
	 public async deleteByToken(token: string): Promise<void> {
		 return this.http.delete(`/merchant/wallet/card?cardToken=${token}`)
	 }
}