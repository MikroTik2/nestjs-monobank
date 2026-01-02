import { Injectable } from "@nestjs/common";
import type { MerchantResponse, PubkeyResponse } from './interfaces'
import { MonobankHttpClient } from "../../core/http/monobank.http-client";

@Injectable()
export class MerchantService {
     public constructor(
          private readonly http: MonobankHttpClient
     ) {}

	public async getMerchantPubkey(): Promise<PubkeyResponse> {
		 return this.http.get("/merchant/pubkey")
	}

     public async getMerchant(): Promise<MerchantResponse> {
          return this.http.get('/merchant/details')
     }
}