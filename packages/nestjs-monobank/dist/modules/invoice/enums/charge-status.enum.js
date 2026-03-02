"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeStatusEnum = void 0;
var ChargeStatusEnum;
(function (ChargeStatusEnum) {
    /**
     * Платіж обробляється.
     */
    ChargeStatusEnum["PROCESSING"] = "processing";
    /**
     * Платіж успішний.
     */
    ChargeStatusEnum["SUCCESS"] = "success";
    /**
     * Платіж неуспішний.
     */
    ChargeStatusEnum["FAILURE"] = "failure";
})(ChargeStatusEnum || (exports.ChargeStatusEnum = ChargeStatusEnum = {}));
