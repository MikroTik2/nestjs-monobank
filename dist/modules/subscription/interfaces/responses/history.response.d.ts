import type { PaginationResponse } from "./pagination.response";
import type { WalletStatusEnum } from "../../enums";
export interface PaymentResponse {
    amount: number;
    status: WalletStatusEnum;
    chargedAt: string;
    ccy: string;
}
export interface HistoryResponse {
    payments: PaymentResponse[];
    pagination: PaginationResponse;
}
