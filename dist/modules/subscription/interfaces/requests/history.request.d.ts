export interface HistoryRequest {
    subscriptionId: string;
    limit?: number;
    page?: number;
    dateFrom: string;
    dateTo?: string;
}
