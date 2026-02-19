/**
 * Запит на створення підписки (регулярного платежу).
 */
export interface CreateSubscriptionRequest {
    /**
     * Сума регулярного платежу у мінімальних одиницях валюти
     */
    amount: number;
    /**
     * ISO 4217 код валюти (за замовчуванням 980 — гривня)
     */
    ccy?: number;
    /**
     * Періодичність списання: 1d, 2w, 1m, 1y
     */
    interval: string;
    /**
     * Строк дії інвойса у секундах (макс. 30 днів)
     */
    validity?: number;
    /**
     * URL для повернення користувача після оплати
     */
    redirectUrl?: string;
    /**
     * Webhook-и для подій підписки
     */
    webhookUrls?: {
        chargeUrl?: string;
        statusUrl?: string;
    };
}
