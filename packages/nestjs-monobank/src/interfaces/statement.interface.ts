/**
 * Інформація про скасований платіж у виписці.
 */
export interface StatmentCancelItem {
    /**
     * Сума скасованої транзакції в мінімальних одиницях.
     */
    amount: number;

    /**
     * ISO 4217 код валюти.
     */
    ccy: number;

    /**
     * Дата скасування транзакції або null, якщо відсутня.
     */
    date: string | null;

    /**
     * Код авторизації транзакції.
     */
    approvalCode: string;

    /**
     * RRN (Retrieval Reference Number) транзакції.
     */
    rrn: string;

    /**
     * Маскований номер картки.
     */
    maskedPan: string;
}

/**
 * Запис про транзакцію у виписці.
 */
export interface StatementItem {
    /**
     * Ідентифікатор рахунку (invoice).
     */
    invoiceId: string;

    /**
     * Поточний статус транзакції.
     */
    status: string;

    /**
     * Маскований номер картки.
     */
    maskedPan: string;

    /**
     * Дата транзакції або null, якщо відсутня.
     */
    date: string | null;

    /**
     * Платіжна система (Visa, Mastercard тощо) або null.
     */
    paymentScheme: string | null;

    /**
     * Сума транзакції в мінімальних одиницях.
     */
    amount: number;

    /**
     * Сума доходу (прибутку) від транзакції.
     */
    profitAmount: number;

    /**
     * ISO 4217 код валюти.
     */
    ccy: number;

    /**
     * Код авторизації транзакції.
     */
    approvalCode: string;

    /**
     * RRN (Retrieval Reference Number) транзакції.
     */
    rrn: string;

    /**
     * Референс мерчанта або внутрішній ідентифікатор.
     */
    reference: string;

    /**
     * Короткий ідентифікатор QR-коду, пов’язаний з транзакцією.
     */
    shortQrId: string;

    /**
     * Призначення платежу або опис транзакції.
     */
    destination: string;

    /**
     * Список скасувань, пов’язаних з цією транзакцією.
     */
    cancelList: StatmentCancelItem[];
}

/**
 * Виписка з рахунку, що містить список транзакцій.
 */
export interface Statement {
    /**
     * Список транзакцій у виписці.
     */
    list: StatementItem[];
}
