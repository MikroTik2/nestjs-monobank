import { Injectable } from "@nestjs/common";
import { MonobankHttpClient } from "../../core/http/monobank.http-client";
import type { CreateRefundRequest, CreateRefundResponse } from './interfaces'

@Injectable()
export class RefundService {
     public constructor(
          private readonly http: MonobankHttpClient
     ) {}

     public async cancel(data: CreateRefundRequest): Promise<CreateRefundResponse> {
          return this.http.post("/merchant/invoice/cancel", data)
     }
}