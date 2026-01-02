import { MonobankHttpClient } from "../../core/http/monobank.http-client";
import type { CreateRefundRequest } from "./interfaces/requests";
import { CreateRefundResponse } from "./interfaces/responses";
export declare class RefundService {
    private readonly http;
    constructor(http: MonobankHttpClient);
    create(data: CreateRefundRequest): Promise<CreateRefundResponse>;
}
