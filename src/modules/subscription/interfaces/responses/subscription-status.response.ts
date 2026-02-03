import type { SubscriptionStatusEnum, WalletStatusEnum } from "../../enums";

export interface SubscriptionStatusResponse {
    subscriptionId: string
    status: SubscriptionStatusEnum
    startDate: string // ISO 8601 date-time
    endDate?: string // ISO 8601 date-time
    amount: number // int64
    ccy: number // ISO 4217 currency code
    interval: string
    nextChargeDate?: string // ISO 8601 date-time
    cancellationDesc?: string

    summary: {
        totalPaid: number
        totalFailed: number
    }

    walletData: {
        cardToken: string
        walletId: string
        status: WalletStatusEnum
        failureDescription?: string
    }
}
