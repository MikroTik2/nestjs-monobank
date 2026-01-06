"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceStatusEnum = void 0;
/**
 * Перечисление возможных статусов инвойса.
 * @enum {string}
 */
var InvoiceStatusEnum;
(function (InvoiceStatusEnum) {
    /**
     * Інвойс створено, очікується оплата.
     */
    InvoiceStatusEnum["CREATED"] = "created";
    /**
     * Платіж обробляється.
     */
    InvoiceStatusEnum["PROCESSING"] = "processing";
    /**
     * Сума заблокована.
     */
    InvoiceStatusEnum["HOLD"] = "hold";
    /**
     * Успішна оплата.
     */
    InvoiceStatusEnum["SUCCESS"] = "success";
    /**
     * Неуспішна оплата.
     */
    InvoiceStatusEnum["FAILURE"] = "failure";
    /**
     * Оплата повернена після успіху.
     */
    InvoiceStatusEnum["REVERSED"] = "reversed";
    /**
     * Час дії інвойсу вичерпано.
     */
    InvoiceStatusEnum["EXPIRED"] = "expired";
})(InvoiceStatusEnum || (exports.InvoiceStatusEnum = InvoiceStatusEnum = {}));
