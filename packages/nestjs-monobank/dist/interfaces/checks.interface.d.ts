/**
 * Інформація про чек.
 */
export interface CheckItem {
    /**
     * Унікальний ідентифікатор чеку.
     */
    id: string;
    /**
     * Тип транзакції (наприклад, sale — продаж).
     */
    type: string;
    /**
     * Поточний статус чеку.
     */
    status: string;
    /**
     * Опис статусу чеку, якщо є.
     */
    statusDescription: string;
    /**
     * URL для перегляду або перевірки чеку.
     */
    taxUrl: string;
    /**
     * Посилання на файл, пов'язаний з чеком.
     */
    file: string;
    /**
     * Джерело фіскалізації (наприклад, monopay).
     */
    fiscalizationSource: string;
}
/**
 * Список чеків.
 */
export interface Checks {
    /**
     * Масив об'єктів типу `CheckItem`.
     */
    checks: CheckItem[];
}
