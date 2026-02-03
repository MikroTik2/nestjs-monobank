import type { PaginationResponse } from "./pagination.response";
import type { SubscriptionStatusEnum } from "../../enums";

export interface ClientSubscription {
    subscriptionId: string
    amount: number
    interval: string
    startDate: string
    created: string
    nextChargeDate?: string
    endDate?: string
    status: SubscriptionStatusEnum;
}

export interface ClientSubscriptionResponse {
    lists: ClientSubscription[]
    pagination: PaginationResponse
}