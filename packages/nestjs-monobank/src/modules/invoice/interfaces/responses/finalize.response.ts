/**
 * Результат підтвердження холду.
 */
export interface FinalizeResponse {
    /**
     * Статус операції: наприклад, "success", "failure" або null, якщо статус невідомий.
     */
    status: string | null;
}