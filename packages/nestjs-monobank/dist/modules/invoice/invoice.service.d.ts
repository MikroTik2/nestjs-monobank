import type { ChecksResponse, CreateCaptureHoldRequest, CreateCaptureHoldResponse, CreateInvoiceRequest, CreateInvoiceResponse, InvoiceStatus } from './interfaces';
import { MonobankHttpClient } from "../../core/http/monobank.http-client";
export declare class InvoiceService {
    private readonly http;
    constructor(http: MonobankHttpClient);
    create(data: CreateInvoiceRequest): Promise<CreateInvoiceResponse>;
    status(id: string): Promise<InvoiceStatus>;
    capture(data: CreateCaptureHoldRequest): Promise<CreateCaptureHoldResponse>;
    checks(invoiceId: string): Promise<ChecksResponse>;
}
