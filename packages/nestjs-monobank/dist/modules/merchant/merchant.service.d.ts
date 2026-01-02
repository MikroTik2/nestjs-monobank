import type { MerchantResponse } from "./interfaces";
import { MonobankHttpClient } from "../../core/http/monobank.http-client";
export declare class MerchantService {
    private readonly http;
    constructor(http: MonobankHttpClient);
    getPubkey(): Promise<{
        key: string;
    }>;
    getMerchant(): Promise<MerchantResponse>;
}
