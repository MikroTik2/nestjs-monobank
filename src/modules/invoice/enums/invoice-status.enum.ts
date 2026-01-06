/**
 * Перечисление возможных статусов инвойса.
 * @enum {string}
 */
export enum InvoiceStatusEnum {
    /**
     * Інвойс створено, очікується оплата.
     */
    CREATED = "created",

    /**
     * Платіж обробляється.
     */
    PROCESSING = "processing",

    /**
     * Сума заблокована.
     */
    HOLD = "hold",

    /**
     * Успішна оплата.
     */
    SUCCESS = "success",

    /**
     * Неуспішна оплата.
     */
    FAILURE = "failure",

    /**
     * Оплата повернена після успіху.
     */
    REVERSED = "reversed",

    /**
     * Час дії інвойсу вичерпано.
     */
    EXPIRED = "expired",
}