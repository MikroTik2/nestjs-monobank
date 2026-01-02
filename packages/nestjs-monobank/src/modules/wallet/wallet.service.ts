import { Injectable } from "@nestjs/common";
import { MonobankHttpClient } from "../../core/http/monobank.http-client";
import type { CreateCardTokenRequest, CreateCardTokenResponse } from './interfaces'

@Injectable()
export class WalletService {
     public constructor(
          public readonly http: MonobankHttpClient
     ) {}

     public async create(data: CreateCardTokenRequest): Promise<CreateCardTokenResponse> {
		 return this.http.post("/merchant/wallet/payment", data)
     }

	 public async getById(id: string) {
		 return this.http.get(`/merchant/wallet?walletId=${id}`)
	 }

	 public async deleteByToken(token: string) {
		 return this.http.delete(`/merchant/wallet/card?cardToken=${token}`)
	 }
}