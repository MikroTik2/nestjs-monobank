import type { CancelStatusEnum } from "../../enums";

/**
 * Відповідь на запит про скасування інвойсу.
 */
export interface Cancel {
    /**
     * Статус операції скасування.
     */
    status: CancelStatusEnum;

    /**
     * Дата створення операції скасування.
     */
    createdDate: string;

    /**
     * Дата останньої модифікації операції.
     */
    modifiedDate: string;
}
