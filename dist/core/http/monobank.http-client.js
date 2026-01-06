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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonobankHttpClient = void 0;
const monobank_constants_1 = require("../config/monobank.constants");
const monobank_error_1 = require("./monobank.error");
const common_1 = require("@nestjs/common");
const undici_1 = require("undici");
const interfaces_1 = require("../../common/interfaces");
let MonobankHttpClient = class MonobankHttpClient {
    constructor(config) {
        this.config = config;
    }
    async request(options) {
        const url = this.buildUrl(options.params);
        const response = await (0, undici_1.request)(url, {
            method: options.method,
            headersTimeout: 15000,
            bodyTimeout: 15000,
            headers: {
                'Content-Type': 'application/json',
                'X-Token': this.config.apiKey,
            },
            body: options.data ? JSON.stringify(options.data) : undefined
        });
        if (response.statusCode >= 400) {
            const text = await response.body.text();
            throw new monobank_error_1.MonobankError('monobank_error', text, text);
        }
        return (await response.body.json());
    }
    get(url, params) {
        return this.request({ method: 'GET', url, params });
    }
    post(url, data) {
        return this.request({ method: 'POST', url, data });
    }
    delete(url, params) {
        return this.request({ method: 'DELETE', url, params });
    }
    buildUrl(url, params) {
        let fullUrl = `${monobank_constants_1.MONOBANK_API_URL}${url}`;
        if (params && typeof params === 'object') {
            const qp = new URLSearchParams(params);
            fullUrl += `?${qp.toString()}`;
        }
        return fullUrl;
    }
};
exports.MonobankHttpClient = MonobankHttpClient;
exports.MonobankHttpClient = MonobankHttpClient = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(interfaces_1.MonobankOptionsSymbol)),
    __metadata("design:paramtypes", [Object])
], MonobankHttpClient);
