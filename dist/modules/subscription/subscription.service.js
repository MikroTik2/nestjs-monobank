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
    async create(data) {
        return this.http.post('/merchant/subscription/create', data);
    }
    async getStatus(subscriptionId) {
        return this.http.get(`/merchant/subscription/status?subscriptionId=${subscriptionId}`);
    }
    async getHistory(query) {
        return this.http.get('merchant/subscription/payments', { params: query });
    }
    async getClientSubscriptions(query) {
        return this.http.get(`/merchant/subscription/list`, { params: query });
    }
    async editSubscription(data) {
        return this.http.post(`/merchant/subscription/edit`, data);
    }
    async removeSubscription(subscriptionId) {
        return this.http.post(`/merchant/subscription/remove?subscriptionId=${subscriptionId}`);
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [monobank_http_client_1.MonobankHttpClient])
], SubscriptionService);
