import type { MerchantPaymInfoItem } from "../../../../common/interfaces";
import type { InvoiceSaveCardData } from "./create-invoice.request";
/**
 * Дані картки для проведення оплати
 */
export interface CardData {
    /** PAN картки (номер) без пробілів */
    pan: string;
    /** Термін дії картки у форматі MMYY */
    exp: string;
    /** CVV/CVC код картки */
    cvv: number;
}
/**
 * Дані для проведення прямого платежу (Charge) через Monobank
 */
export interface CreateChargeRequest {
    /** Сума оплати у мінімальних одиницях (копійки для гривні) */
    amount: number;
    /** Валюта у форматі ISO 4217 (за замовчуванням 980 — гривня) */
    ccy?: number;
    /** Дані картки */
    cardData: CardData;
    /** Інформація про замовлення/мерчанта */
    merchantPaymInfo?: MerchantPaymInfoItem;
    /** URL для отримання сповіщень про зміну статусу платежу */
    webhookUrl?: string;
    /** URL для повернення користувача після завершення оплати */
    redirectUrl?: string;
    /** Тип операції:
     * - "debit" — списання коштів одразу
     * - "hold" — утримання коштів (9 днів)
     */
    paymentType?: "debit" | "hold";
    /** Дані для збереження картки (токенізація), якщо підключено */
    saveCardData?: InvoiceSaveCardData;
    /** Ініціатор платежу:
     * - "merchant" — ініційовано мерчантом (регулярні платежі)
     * - "client" — ініційовано клієнтом (за запитом користувача)
     */
    initiationKind: "merchant" | "client";
}
