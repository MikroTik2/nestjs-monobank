import type { SubscriptionSummary, WalletData } from "../../../../common/interfaces";
import type { SubscriptionStatusEnum } from "../../enums";
/**
 * Статус підписки клієнта
 */
export interface SubscriptionStatusResponse {
    /** Ідентифікатор підписки */
    subscriptionId: string;
    /** Статус підписки */
    status: SubscriptionStatusEnum;
    /** Дата початку підписки (ISO 8601) */
    startDate: string;
    /** Дата завершення підписки (ISO 8601), якщо підписка закінчена або запланована */
    endDate?: string;
    /** Сума списання у мінімальних одиницях валюти */
    amount: number;
    /** Числовий код валюти ISO 4217 */
    ccy: number;
    /** Періодичність списання (наприклад, "1m", "2w") */
    interval: string;
    /** Дата наступного списання (ISO 8601), якщо відома */
    nextChargeDate?: string;
    /** Причина скасування, якщо підписка була скасована */
    cancellationDesc?: string;
    /** Статистика платежів по підписці */
    summary: SubscriptionSummary;
    /** Дані гаманця, через який проходять списання */
    walletData: WalletData;
}
