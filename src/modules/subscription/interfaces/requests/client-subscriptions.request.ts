import type { SubscriptionStatusEnum } from "../../enums";

export interface ClientSubscriptionsRequest {
    status?: SubscriptionStatusEnum;
    limit?: number;
    page?: number;
    dateFrom: string;
    dateTo?: string;
}