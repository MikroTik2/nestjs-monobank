/**
 * Представляє окрему картку у гаманці.
 */
export interface CardTokenItem {
    /**
     * Токен, що ідентифікує картку
     *
     */
    cardToken: string;
    /**
     * Маскований номер картки
     */
    maskedPan: string;
    /**
     * Код країни у форматі ISO 3166-1 (числовий формат)
     */
    country: string;
}
/**
 * Об'єкт гаманця, що містить список карток.
 */
export interface CardTokens {
    wallet: CardTokenItem[];
}
