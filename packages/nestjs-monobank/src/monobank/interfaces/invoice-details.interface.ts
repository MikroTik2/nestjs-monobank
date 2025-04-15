/**
 * Відповідь після створення інвойсу.
 */
export interface InvoiceDetails {
    /**
     * Ідентифікатор інвойсу.
     */
    invoiceId: string;

    /**
     * Посилання на сторінку оплати.
     */
    pageUrl: string;
}
