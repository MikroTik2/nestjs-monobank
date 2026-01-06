import type { InvoiceCancelItem, TipsInfo, WalletData } from "../../../../common/interfaces";
import type { InvoiceStatusEnum } from "../../enums";

/**
 * Інформація про здійснений платіж за рахунком.
 */
export interface InvoiceStatusPaymentInfo {
    /**
     * Маскований номер картки, з якої здійснено платіж.
     */
    maskedPan: string;

    /**
     * Код авторизації транзакції.
     */
    approvalCode: string;

    /**
     * RRN (Retrieval Reference Number) — унікальний ідентифікатор транзакції.
     */
    rrn: string;

    /**
     * Унікальний ідентифікатор транзакції в системі банку.
     */
    tranId: string;

    /**
     * Ідентифікатор терміналу, через який проведено оплату.
     */
    terminal: string;

    /**
     * Назва банку, що обробив платіж.
     */
    bank: string;

    /**
     * Платіжна система (наприклад, Visa, Mastercard).
     */
    paymentSystem: string;

    /**
     * Метод оплати (наприклад, картка, Google Pay, Apple Pay).
     */
    paymentMethod: string;

    /**
     * Комісія, стягнена банком, у мінімальних одиницях валюти.
     */
    fee: number;

    /**
     * Код країни у форматі ISO 3166-1 numeric (наприклад, 804 — Україна).
     */
    country: 804;

    /**
     * Комісія агента, якщо застосовується (у мінімальних одиницях).
     */
    agentFee: number;
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
    cancelList: InvoiceCancelItem[];

    /**
     * Інформація про платіж, що включає деталі транзакції.
     */
    paymentInfo: InvoiceStatusPaymentInfo;

    /**
     * Дані про гаманця користувача, що зберігає токенізовану картку.
     */
    walletData: WalletData;

    /**
     * Інформація про чайові, якщо вони були сплачені.
     */
    tipsInfo: TipsInfo;
}
