import type { SubscriptionStatusEnum, WalletStatusEnum } from "../../enums";
export interface SubscriptionStatusResponse {
    subscriptionId: string;
    status: SubscriptionStatusEnum;
    startDate: string;
    endDate?: string;
    amount: number;
    ccy: number;
    interval: string;
    nextChargeDate?: string;
    cancellationDesc?: string;
    summary: {
        totalPaid: number;
        totalFailed: number;
    };
    walletData: {
        cardToken: string;
        walletId: string;
        status: WalletStatusEnum;
        failureDescription?: string;
    };
}
