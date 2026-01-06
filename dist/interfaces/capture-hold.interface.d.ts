import { BasketItem } from "./common.interface";
/**
 * Запит на підтвердження (списання) коштів із раніше створеного холду.
 */
export interface CaptureHoldRequest {
    /**
     * Ідентифікатор рахунку (invoice), який потрібно підтвердити.
     */
    invoiceId: string;
    /**
     * (Необов'язково) Сума для списання в мінімальних одиницях.
     * Якщо не вказано — буде списано повну суму холду.
     */
    amount?: number;
    /**
     * (Необов'язково) Список товарів для фіскалізації або звітності.
     */
    items?: BasketItem[];
}
/**
 * Результат підтвердження холду.
 */
export interface CaptureHold {
    /**
     * Статус операції: наприклад, "success", "failure" або null, якщо статус невідомий.
     */
    status: string | null;
}
