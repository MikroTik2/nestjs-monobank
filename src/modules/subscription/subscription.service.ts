import { Injectable } from '@nestjs/common';
import type {
    ClientSubscriptionResponse,
    ClientSubscriptionsRequest,
    CreateSubscriptionRequest,
    CreateSubscriptionResponse,
    EditSubscriptionRequest,
    HistoryRequest,
    HistoryResponse,
    SubscriptionStatusResponse
} from "./interfaces";
import { MonobankHttpClient } from "../../core/http/monobank.http-client";

@Injectable()
export class SubscriptionService {
    public constructor(private readonly http: MonobankHttpClient) {}

    public async create(data: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse> {
        return this.http.post('/merchant/subscription/create', data)
    }

    public async getStatus(subscriptionId: string): Promise<SubscriptionStatusResponse> {
        return this.http.get(`/merchant/subscription/status?subscriptionId=${subscriptionId}`);
    }

    public async getHistory(query: HistoryRequest): Promise<HistoryResponse> {
        return this.http.get('merchant/subscription/payments', { params: query })
    }

    public async getClientSubscriptions(query: ClientSubscriptionsRequest): Promise<ClientSubscriptionResponse> {
        return this.http.get(`/merchant/subscription/list`, { params: query });
    }

    public async editSubscription(data: EditSubscriptionRequest): Promise<void> {
        return this.http.post(`/merchant/subscription/edit`, data);
    }

    public async removeSubscription(subscriptionId: string): Promise<void> {
        return this.http.post(`/merchant/subscription/remove?subscriptionId=${subscriptionId}`);
    }
}