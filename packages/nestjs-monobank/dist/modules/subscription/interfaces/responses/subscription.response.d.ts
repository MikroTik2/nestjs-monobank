/**
 * Відповідь API при створенні або отриманні підписки
 */
export interface SubscriptionResponse {
    /** Ідентифікатор підписки */
    subscriptionId: string;
    /** URL сторінки підписки для користувача */
    pageUrl: string;
}
