import type { Invoice } from "./invoice.response";

/**
 * Відповідь API при створенні рахунку (invoice).
 * Наслідує базову структуру Invoice.
 */
export interface CreateInvoiceResponse extends Invoice {}