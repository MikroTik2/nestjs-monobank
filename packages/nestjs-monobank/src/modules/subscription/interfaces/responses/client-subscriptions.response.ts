import type { PaginatedResponse } from "../../../../common/interfaces";
import type { SubscriptionStatusEnum } from "../../enums";

/**
 * Інформація про підписку клієнта
 */
export interface ClientSubscription {
    /** Ідентифікатор підписки */
    subscriptionId: string;

    /** Сума списання у мінімальних одиницях валюти */
    amount: number;

    /** Періодичність списання (наприклад, "1m", "2w") */
    interval: string;

    /** Дата початку підписки (RFC3339 / ISO8601) */
    startDate: string;

    /** Дата створення підписки */
    created: string;

    /** Дата наступного списання (якщо відома) */
    nextChargeDate?: string;

    /** Дата завершення підписки (якщо задана) */
    endDate?: string;

    /** Статус підписки */
    status: SubscriptionStatusEnum;
}

/**
 * Відповідь API з історією або списком підписок клієнта
 */
export type ClientSubscriptionResponse = PaginatedResponse<ClientSubscription[]>