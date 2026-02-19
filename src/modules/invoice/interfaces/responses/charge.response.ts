import type { ChargeStatusEnum } from "../../enums";

export interface ChargeResponse {
    /**
     * Ідентифікатор інвойсу, за яким здійснювалась оплата
     */
    invoiceId: string;
  
    /**
     * Посилання на проходження 3DS підтвердження платежу (якщо потрібне)
     */
    tdsUrl?: string;
    
    /**
     * Статус оплати
     */
    status: ChargeStatusEnum;
  
    /**
     * Причина відмови в оплаті
     */
    failureReason?: string;
  
    /**
     * Сума у мінімальних одиницях валюти (наприклад, копійки)
     */
    amount: number;
  
    /**
     * ISO 4217 код валюти
     */
    ccy: number;
  
    /**
     * Дата і час створення заяви на оплату
     */
    createdDate: string;
  
    /**
     * Дата і час останньої модифікації операції оплати
     */
    modifiedDate: string;
}