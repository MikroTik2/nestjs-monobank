"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementService = void 0;
const common_1 = require("@nestjs/common");
const monobank_http_client_1 = require("../../core/http/monobank.http-client");
let StatementService = class StatementService {
    constructor(http) {
        this.http = http;
    }
    /**
    * Отримує виписки по рахунках за заданий період.
    * @param {string} account - Ідентифікатор рахунку (наприклад, номер картки). 0 — основний рахунок в UAH.
    * @param {string} from - Початковий час періоду в форматі Unix time (секунди).
    * @param {string} [to] - Кінцевий час періоду в форматі Unix time (секунди). Якщо не вказано, використовується поточний час.
    * @returns {Promise<StatementResponse>} Список операцій за період.
    * @example
    * const statement = await this.monobankService.statement.getStatementByPeriod('0', '1680000000', '1681000000');
    * console.log(statement.items);
    */
    async getStatementByPeriod(account, from, to) {
        const url = to ? `/merchant/statement/${account}/${from}/${to}` : `/merchant/statement/${account}/${from}`;
        return this.http.get("get", url);
    }
};
exports.StatementService = StatementService;
exports.StatementService = StatementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [monobank_http_client_1.MonobankHttpClient])
], StatementService);
