/**
 * Запит на отримання історії платежів за підпискою
 */
export interface HistoryRequest {
    /** Ідентифікатор підписки */
    subscriptionId: string;
  
    /** Кількість отриманих платежів (дефолт 20) */
    limit?: number;
  
    /** Номер сторінки / зміщення (дефолт 1) */
    page?: number;
  
    /** Дата від (RFC3339) */
    dateFrom: string;
  
    /** Дата до (RFC3339) */
    dateTo?: string;
  }
  