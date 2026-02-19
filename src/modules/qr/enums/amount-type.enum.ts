/**
 * Тип суми одноразової QR-каси
 */
export enum AmountTypeEnum {
    /** Суму встановлює мерчант */
    MERCHANT = 'merchant',
  
    /** Суму встановлює клієнт */
    CLIENT = 'client',
  
    /** Сума фіксована */
    FIX = 'fix',
}