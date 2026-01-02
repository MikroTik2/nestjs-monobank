"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundStatusEnum = void 0;
var RefundStatusEnum;
(function (RefundStatusEnum) {
    /**
     * Заява на скасування знаходиться в обробці.
     */
    RefundStatusEnum["PROCESSING"] = "processing";
    /**
     * Заяву на скасування виконано успішно.
     */
    RefundStatusEnum["SUCCESS"] = "success";
    /**
     * Неуспішне скасування операції.
     */
    RefundStatusEnum["FAILURE"] = "failure";
})(RefundStatusEnum || (exports.RefundStatusEnum = RefundStatusEnum = {}));
