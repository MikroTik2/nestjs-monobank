import { MonobankHttpClient } from "../../core/http/monobank.http-client";
import type { CreateRefundRequest, CreateRefundResponse } from './interfaces';
export declare class RefundService {
    private readonly http;
    constructor(http: MonobankHttpClient);
    cancel(data: CreateRefundRequest): Promise<CreateRefundResponse>;
}
