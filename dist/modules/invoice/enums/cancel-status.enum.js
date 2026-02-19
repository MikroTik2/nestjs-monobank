"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelStatusEnum = void 0;
/**
 * Статус операції скасування інвойсу.
 * @enum {string}
 */
var CancelStatusEnum;
(function (CancelStatusEnum) {
    /**
     * Заявка на скасування знаходиться в обробці.
     */
    CancelStatusEnum["PROCESSING"] = "processing";
    /**
     * Заявка на скасування виконана успішно.
     */
    CancelStatusEnum["SUCCESS"] = "success";
    /**
     * Неуспішна заявка на скасування.
     */
    CancelStatusEnum["FAILURE"] = "failure";
})(CancelStatusEnum || (exports.CancelStatusEnum = CancelStatusEnum = {}));
