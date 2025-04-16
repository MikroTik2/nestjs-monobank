/**
 * Перечисление возможных статусов инвойса.
 * @enum {string}
 */
export enum InvoiceStatusEnum {
    /**
     * Інвойс створено, очікується оплата.
     */
    CREATED = "created",

    /**
     * Платіж обробляється.
     */
    PROCESSING = "processing",

    /**
     * Сума заблокована.
     */
    HOLD = "hold",

    /**
     * Успішна оплата.
     */
    SUCCESS = "success",

    /**
     * Неуспішна оплата.
     */
    FAILURE = "failure",

    /**
     * Оплата повернена після успіху.
     */
    REVERSED = "reversed",

    /**
     * Час дії інвойсу вичерпано.
     */
    EXPIRED = "expired",
}

/**
 * Інформація про оплату, включаючи дані щодо токенізації картки та чайових.
 */
export interface InvoiceInfo {
    status: "processing" | "success" | "failure" | "reversed";

    walletData: {
        /**
         * Токен картки.
         */
        cardToken: string;

        /**
         * Ідентифікатор гаманця покупця.
         */
        walletId: string;

        /**
         * Статус токенізації картки.
         */
        status: "new" | "created" | "failed";
    };

    tipsInfo?: {
        /**
         * Ідентифікатор співробітника, якому можна виплатити чайові.
         */
        employeeId: string;

        /**
         * Сума успішно сплачених чайових у мінімальних одиницях валюти.
         */
        amount: number;
    };
}
/**
 * Інформація про статус рахунку.
 */
export interface InvoiceStatus {
    /**
     * Ідентифікатор інвойсу.
     */
    invoiceId: string;

    /**
     * Поточний статус інвойсу.
     */
    status: InvoiceStatusEnum;

    /**
     * Причина відмови, якщо оплата неуспішна.
     */
    failureReason?: string;

    /**
     * Код помилки, яка виникла під час обробки платежу.
     */
    errCode?: string;

    /**
     * Сума у мінімальних одиницях валюти.
     */
    amount: number;

    /**
     * Валюта операції.
     */
    ccy: number;

    /**
     * Підсумкова сума після оплати та повернень.
     */
    finalAmount: number;

    /**
     * Дата і час фінансової операції.
     */
    createdDate: string;

    /**
     * Дата і час останньої модифікації операції.
     */
    modifiedDate: string;

    /**
     * Референс платежу, який визначається продавцем.
     */
    reference: string;

    /**
     * Призначення платежу, визначається продавцем.
     */
    destination: string;

    /**
     * Список прийнятих заявок на скасування.
     */
    cancelList: InvoiceInfo[];
}
