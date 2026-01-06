import { MerchantPaymInfoItem } from "./common.interface";
/**
 * Запит на створення платежу за токеном картки.
 */
export interface CardTokenRequest {
    /**
     * Токен картки, отриманий з особистого кабінету або тестовий токен
     */
    cardToken: string;
    /**
     * Сума платежу в мінімальних одиницях (наприклад, копійки для гривні)
     */
    amount: number;
    /**
     * ISO 4217 код валюти
     */
    ccy: number;
    /**
     * (Не обов'язковий) URL для переадресації користувача після 3DS підтвердження
     */
    redirectUrl?: string;
    /**
     * (Не обов'язковий) URL для вебхука, на який надсилаються оновлення статусу платежу
     */
    webHookUrl?: string;
    /**
     * Тип ініціації платежу:
     * "merchant" - ініціатива мерчанту (наприклад, регулярний платіж)
     * "client" - ініціатива клієнта (клієнт підтверджує платіж)
     */
    initiationKind: "merchant" | "client";
    /**
     * (Не обов'язковий) Тип платежу:
     * "debit" - списання коштів
     * "hold" - блокування коштів
     */
    paymentType?: "debit" | "hold";
    /**
     * (Не обов'язковий) Інформація про платіж, для зв'язку з ПРРО через веб-кабінет
     */
    merchantPaymInfo?: MerchantPaymInfoItem;
}
/**
 * Результат платежу за токеном картки.
 */
export interface CardToken {
    /**
     * Унікальний ідентифікатор рахунку (invoice).
     */
    invoiceId: string;
    /**
     * URL для проведення 3DS підтвердження платежу.
     */
    tdsUrl: string;
    /**
     * Статус платежу: "success", "failure" тощо.
     */
    status: string;
    /**
     * Причина невдачі платежу (якщо статус "failure").
     */
    failureReason?: string;
    /**
     * Сума платежу в мінімальних одиницях (наприклад, копійки для гривні).
     */
    amount: number;
    /**
     * ISO 4217 код валюти.
     */
    ccy: number;
    /**
     * Дата створення рахунку (може бути null).
     */
    createdDate: string | null;
    /**
     * Дата останнього оновлення рахунку (може бути null).
     */
    modifiedDate: string | null;
}
