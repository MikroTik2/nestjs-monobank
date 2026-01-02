import { MonobankHttpClient } from "../../core/http/monobank.http-client";
import type { CreateCardTokenRequest } from './interfaces/requests/create-card-token.request';
import { CreateCardTokenResponse } from './interfaces';
export declare class WalletService {
    readonly http: MonobankHttpClient;
    constructor(http: MonobankHttpClient);
    create(data: CreateCardTokenRequest): Promise<CreateCardTokenResponse>;
    getById(id: string): Promise<unknown>;
    deleteByToken(token: string): Promise<unknown>;
}
