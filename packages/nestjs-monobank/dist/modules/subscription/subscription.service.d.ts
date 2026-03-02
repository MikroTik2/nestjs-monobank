import type { ClientSubscriptionResponse, ClientSubscriptionsRequest, CreateSubscriptionRequest, CreateSubscriptionResponse, EditSubscriptionRequest, HistoryRequest, HistoryResponse, SubscriptionStatusResponse } from "./interfaces";
import { MonobankHttpClient } from "../../core/http/monobank.http-client";
export declare class SubscriptionService {
    private readonly http;
    constructor(http: MonobankHttpClient);
    create(data: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse>;
    getStatus(subscriptionId: string): Promise<SubscriptionStatusResponse>;
    getHistory(query: HistoryRequest): Promise<HistoryResponse>;
    getClientSubscriptions(query: ClientSubscriptionsRequest): Promise<ClientSubscriptionResponse>;
    editSubscription(data: EditSubscriptionRequest): Promise<void>;
    removeSubscription(subscriptionId: string): Promise<void>;
}
