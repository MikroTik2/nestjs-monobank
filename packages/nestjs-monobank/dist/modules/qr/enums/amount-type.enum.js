"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmountTypeEnum = void 0;
/**
 * Тип суми одноразової QR-каси
 */
var AmountTypeEnum;
(function (AmountTypeEnum) {
    /** Суму встановлює мерчант */
    AmountTypeEnum["MERCHANT"] = "merchant";
    /** Суму встановлює клієнт */
    AmountTypeEnum["CLIENT"] = "client";
    /** Сума фіксована */
    AmountTypeEnum["FIX"] = "fix";
})(AmountTypeEnum || (exports.AmountTypeEnum = AmountTypeEnum = {}));
