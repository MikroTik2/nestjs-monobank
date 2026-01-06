/**
 * Результат платежу за токеном картки.
 */
export interface CardTokenResponse {
    /**
     * Унікальний ідентифікатор рахунку (invoice).
     */
    invoiceId: string;
    /**
     * URL для проведення 3DS підтвердження платежу.
     */
    tdsUrl: string;
    /**
     * Статус платежу: "success", "failure" тощо.
     */
    status: string;
    /**
     * Причина невдачі платежу (якщо статус "failure").
     */
    failureReason?: string;
    /**
     * Сума платежу в мінімальних одиницях (наприклад, копійки для гривні).
     */
    amount: number;
    /**
     * ISO 4217 код валюти.
     */
    ccy: number;
    /**
     * Дата створення рахунку (може бути null).
     */
    createdDate: string | null;
    /**
     * Дата останнього оновлення рахунку (може бути null).
     */
    modifiedDate: string | null;
}
