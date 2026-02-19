"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletStatusEnum = void 0;
/**
 * Статуси кошика.
 */
var WalletStatusEnum;
(function (WalletStatusEnum) {
    /**
     * Кошик новостворений.
     */
    WalletStatusEnum["NEW"] = "new";
    /**
     * Кошик успішно створений.
     */
    WalletStatusEnum["SUCCESS"] = "success";
    /**
     * Кошик не успішно створений.
     */
    WalletStatusEnum["FAILED"] = "failed";
})(WalletStatusEnum || (exports.WalletStatusEnum = WalletStatusEnum = {}));
