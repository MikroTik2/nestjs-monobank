/**
 * Результат підтвердження холду.
 */
export interface CaptureHold {
    /**
     * Статус операції: наприклад, "success", "failure" або null, якщо статус невідомий.
     */
    status: string | null;
}
