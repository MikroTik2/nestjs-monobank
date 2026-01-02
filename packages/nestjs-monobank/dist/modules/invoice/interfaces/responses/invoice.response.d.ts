/**
 * Відповідь після створення інвойсу.
 */
export interface Invoice {
    /**
     * Ідентифікатор інвойсу.
     */
    invoiceId: string;
    /**
     * Посилання на сторінку оплати.
     */
    pageUrl: string;
}
