/**
 * Запит на зміну (скасування) підписки
 */
export interface EditSubscriptionRequest {
    /**
     * Ідентифікатор підписки
     */
    subscriptionId: string;
    /**
     * Дія над підпискою
     */
    action: 'cancel';
    /**
     * Сума для повернення у мінімальних одиницях валюти
     * Якщо не передано, повернення коштів не виконується
     */
    refundAmount?: number;
}
