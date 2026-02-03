import { MonobankHttpClient } from "../../core/http/monobank.http-client";
import type { StatementResponse } from "./interfaces";
export declare class StatementService {
    private readonly http;
    constructor(http: MonobankHttpClient);
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
    getStatementByPeriod(account: string, from: string, to?: string): Promise<StatementResponse>;
}
