/**
 * Тип знижки або надбавки.
 */
export interface Discount {
    /**
     * Тип:
     * - DISCOUNT — знижка
     * - EXTRA_CHARGE — надбавка
     * Обов’язкове поле.
     */
    type: "DISCOUNT" | "EXTRA_CHARGE";
    /**
     * Режим:
     * - PERCENT — у відсотках
     * - VALUE — фіксоване значення
     * Обов’язкове поле.
     */
    mode: "PERCENT" | "VALUE";
    /**
     * Значення знижки або надбавки.
     * Обов’язкове поле.
     */
    value: number;
}
