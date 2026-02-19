import type { PaginatedResponse } from "../../../../common/interfaces";
import type { WalletStatusEnum } from "../../enums";
export interface PaymentResponse {
    amount: number;
    status: WalletStatusEnum;
    chargedAt: string;
    ccy: string;
}
export type HistoryResponse = PaginatedResponse<PaymentResponse>;
