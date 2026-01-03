import type { MerchantResponse, PubkeyResponse } from './interfaces';
import { MonobankHttpClient } from "../../core/http/monobank.http-client";
export declare class MerchantService {
    private readonly http;
    constructor(http: MonobankHttpClient);
    getMerchantPubkey(): Promise<PubkeyResponse>;
    getMerchant(): Promise<MerchantResponse>;
}
