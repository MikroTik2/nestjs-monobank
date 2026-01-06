import { RefundStatusEnum } from "../../enums";
/**
 * Відповідь на запит про скасування інвойсу.
 */
export interface Refund {
    /**
     * Статус операції скасування.
     */
    status: RefundStatusEnum;
    /**
     * Дата створення операції скасування.
     */
    createdDate: string;
    /**
     * Дата останньої модифікації операції.
     */
    modifiedDate: string;
}
