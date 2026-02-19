import { AmountTypeEnum } from "../../enums";
/**
 * Дані однієї QR-каси
 */
export interface QrResponse {
    /** Короткий ідентифікатор QR-каси */
    shortQrId: string;
    /** Ідентифікатор QR-каси для встановлення суми оплати на існуючих QR-касах */
    qrId: string;
    /** Тип суми одноразової каси */
    amountType: AmountTypeEnum;
    /** Посилання на оплату QR-каси */
    pageUrl: string;
}
