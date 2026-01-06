/**
 * Інформація про мерчанта, зареєстрованого в Monobank.
 */
export interface MerchantResponse {
    /**
     * Унікальний ідентифікатор мерчанта.
     */
    merchantId: string;
    /**
     * Назва компанії або організації.
     */
    merchantName: string;
    /**
     * ЄДРПОУ (ідентифікаційний код юридичної особи в Україні).
     */
    edrpou: string;
}
