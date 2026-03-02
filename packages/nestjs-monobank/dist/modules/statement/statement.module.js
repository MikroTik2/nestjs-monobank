"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementModule = void 0;
const common_1 = require("@nestjs/common");
const statement_service_1 = require("./statement.service");
let StatementModule = class StatementModule {
};
exports.StatementModule = StatementModule;
exports.StatementModule = StatementModule = __decorate([
    (0, common_1.Module)({
        providers: [statement_service_1.StatementService],
        exports: [statement_service_1.StatementService],
    })
], StatementModule);
