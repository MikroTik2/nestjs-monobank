import type { SubscriptionStatusEnum } from "../../enums";

/**
 * Запит на отримання списку підписок клієнта.
 */
export interface ClientSubscriptionsRequest {
    /**
     * Статус підписки.
     */
    status?: SubscriptionStatusEnum;

    /**
     * Кількість підписок на сторінку.
     */
    limit?: number;

    /**
     * Номер сторінки.
     */
    page?: number;

    /**
     * Дата початку періоду.
     */
    dateFrom: string;

    /**
     * Дата кінця періоду.
     */
    dateTo?: string;
}