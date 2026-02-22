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
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const monobank_http_client_1 = require("../../core/http/monobank.http-client");
let SubscriptionService = class SubscriptionService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Створює нову підписку (регулярний платіж).
     * Після створення клієнта необхідно перенаправити на `pageUrl`
     * для підтвердження підписки.
     *
     * @param {CreateSubscriptionRequest} data Дані для створення підписки
     * @returns {Promise<CreateSubscriptionResponse>} Обʼєкт із посиланням на сторінку оплати
     *
     * @example
     * const subscription = await this.monobankService.subscription.create({
     *   amount: 19900,
     *   redirectUrl: 'https://example.com/success',
     *   webHookUrls: {
     *     interval: '1m',
     *     validity: 2592000
     *   }
     * });
     *
     * console.log(subscription.pageUrl);
     */
    async create(data) {
        return this.http.post('/merchant/subscription/create', data);
    }
    /**
     * Отримує поточний статус підписки.
     *
     * @param {string} subscriptionId Унікальний ідентифікатор підписки
     * @returns {Promise<SubscriptionStatusResponse>} Інформація про статус підписки
     *
     * @example
     * const status = await this.monobankService.subscription.getStatus('sub_123456');
     * console.log(status.status);
     */
    async getStatus(subscriptionId) {
        return this.http.get(`/merchant/subscription/status?subscriptionId=${subscriptionId}`);
    }
    /**
     * Отримує історію платежів по підписці.
     *
     * @param {HistoryRequest} query Параметри фільтрації (subscriptionId, дати, ліміти)
     * @returns {Promise<HistoryResponse>} Список платежів
     *
     * @example
     * const history = await this.monobankService.subscription.getHistory({
     *   subscriptionId: 'sub_123456',
     *   dateFrom: '2025-01-01T00:00:00Z',
     *   limit: 20
     * });
     */
    async getHistory(query) {
        return this.http.get('/merchant/subscription/payments', { params: query });
    }
    /**
     * Отримує список підписок мерчанта або клієнта.
     *
     * @param {ClientSubscriptionsRequest} query Параметри пошуку (статус, дати, сторінка)
     * @returns {Promise<ClientSubscriptionsResponse>} Масив підписок
     *
     * @example
     * const subscriptions = await this.monobankService.subscription.getClientSubscriptions({
     *   status: 'active',
     *   limit: 10
     * });
     */
    async getClientSubscriptions(query) {
        return this.http.get(`/merchant/subscription/list`, { params: query });
    }
    /**
     * Редагує або скасовує підписку.
     * На даний момент підтримується дія `cancel`.
     *
     * @param {EditSubscriptionRequest} data Дані для редагування підписки
     * @returns {Promise<void>}
     *
     * @example
     * await this.monobankService.subscription.editSubscription({
     *   subscriptionId: 'sub_123456',
     *   action: 'cancel'
     * });
     */
    async editSubscription(data) {
        return this.http.post(`/merchant/subscription/edit`, data);
    }
    /**
     * Видаляє (деактивує) підписку.
     *
     * @param {string} subscriptionId Ідентифікатор підписки
     * @returns {Promise<void>}
     *
     * @example
     * await this.monobankService.subscription.removeSubscription('sub_123456');
     */
    async removeSubscription(subscriptionId) {
        return this.http.post(`/merchant/subscription/remove?subscriptionId=${subscriptionId}`);
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [monobank_http_client_1.MonobankHttpClient])
], SubscriptionService);
