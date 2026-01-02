import { Injectable } from "@nestjs/common";
import type { 
     ChecksResponse,
     CreateCaptureHoldRequest, 
     CreateCaptureHoldResponse, 
     CreateInvoiceRequest, 
     CreateInvoiceResponse, 
     InvoiceStatus 
} from './interfaces'
import { MonobankHttpClient } from "../../core/http/monobank.http-client";

@Injectable()
export class InvoiceService {
     public constructor(
          private readonly http: MonobankHttpClient
     ) {}

     public async create(data: CreateInvoiceRequest): Promise<CreateInvoiceResponse> {
          return this.http.post('/merchant/invoice/create', data)
     }

     public async status(id: string): Promise<InvoiceStatus> {
          return this.http.get(`/merchant/invoice/status?invoiceId=${id}`)
     }

     public async capture(data: CreateCaptureHoldRequest): Promise<CreateCaptureHoldResponse> {
          return this.http.post("/merchant/invoice/finalize", data);
     }

     public async checks(invoiceId: string): Promise<ChecksResponse> {
          return this.http.get(`/merchant/invoice/fiscal-checks?invoiceId=${invoiceId}`);
     }
}