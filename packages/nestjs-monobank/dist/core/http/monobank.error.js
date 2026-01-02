"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonobankError = void 0;
class MonobankError extends Error {
    constructor(code, description, data) {
        super(description);
        this.code = code;
        this.description = description;
        this.data = data;
        this.name = "MonobankError";
    }
}
exports.MonobankError = MonobankError;
