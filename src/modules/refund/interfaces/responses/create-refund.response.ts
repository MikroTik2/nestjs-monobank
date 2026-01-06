import type { Refund } from "./refund.response";

/**
 * Відповідь API при створенні запиту на повернення коштів.
 * Наслідує базову структуру Refund.
 */
export interface CreateRefundResponse extends Refund {}