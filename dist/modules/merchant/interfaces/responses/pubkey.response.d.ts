/**
 * Відповідь API з відкритим RSA-ключем мерчанта.
 */
export interface PubkeyResponse {
    /**
     * Відкритий RSA-ключ у PEM-форматі.
     * Використовується для верифікації підписів Monobank.
     */
    key: string;
}
