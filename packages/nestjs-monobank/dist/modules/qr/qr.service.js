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
exports.QrService = void 0;
const common_1 = require("@nestjs/common");
const monobank_http_client_1 = require("../../core/http/monobank.http-client");
let QrService = class QrService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Отримує список усіх QR-кас мерчанта.
     * @returns {Promise<ListResponse>} Список QR-кас.
     * @example
     * const qrList = await this.monobankService.qr.getList();
     * console.log(qrList.list);
     */
    async getList() {
        return this.http.get("/merchant/qr/list");
    }
    /**
     * Отримує деталі конкретної QR-каси.
     * @param {string} qrId - Ідентифікатор QR-каси, яку потрібно отримати.
     * @returns {Promise<QrResponse>} Деталі QR-каси.
     * @example
     * const qrDetails = await this.monobankService.qr.getDetails('123456');
     * console.log(qrDetails.pageUrl);
     */
    async getDetails(qrId) {
        return this.http.get(`/merchant/qr/details?qrId=${qrId}`);
    }
    /**
     * Видаляє суму оплати конкретної QR-каси.
     * @param {string} qrId - Ідентифікатор QR-каси, для якої потрібно скинути суму.
     * @returns {Promise<void>} Порожня відповідь при успішному видаленні суми.
     * @example
     * await this.monobankService.qr.resetAmount('XJ_DiM4rTd5V');
     * console.log('Суму було видалено');
     */
    async resetAmount(qrId) {
        return this.http.post(`/merchant/qr/reset-amount`, { qrId });
    }
};
exports.QrService = QrService;
exports.QrService = QrService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [monobank_http_client_1.MonobankHttpClient])
], QrService);
