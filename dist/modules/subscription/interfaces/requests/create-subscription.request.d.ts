export interface CreateSubscriptionRequest {
    amount: number;
    ccy?: number;
    redirectUrl?: string;
    webhookUrls?: {
        chargeUrl?: string;
        statusUrl?: string;
    };
    interval: string;
    validity?: number;
}
