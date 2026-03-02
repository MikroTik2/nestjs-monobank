/**
 * Статус операції скасування інвойсу.
 * @enum {string}
 */
export declare enum CancelStatusEnum {
    /**
     * Заявка на скасування знаходиться в обробці.
     */
    PROCESSING = "processing",
    /**
     * Заявка на скасування виконана успішно.
     */
    SUCCESS = "success",
    /**
     * Неуспішна заявка на скасування.
     */
    FAILURE = "failure"
}
