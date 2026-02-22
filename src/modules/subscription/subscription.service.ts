import { Injectable } from '@nestjs/common';
import type {
    ClientSubscriptionResponse,
    ClientSubscriptionsRequest,
    CreateSubscriptionRequest,
    CreateSubscriptionResponse,
    EditSubscriptionRequest,
    HistoryRequest,
    HistoryResponse,
    SubscriptionStatusResponse
} from "./interfaces";
import { MonobankHttpClient } from "../../core/http/monobank.http-client";

@Injectable()
export class SubscriptionService {
    public constructor(private readonly http: MonobankHttpClient) {}

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
    public async create(data: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse> {
        return this.http.post('/merchant/subscription/create', data)
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
    public async getStatus(subscriptionId: string): Promise<SubscriptionStatusResponse> {
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
    public async getHistory(query: HistoryRequest): Promise<HistoryResponse> {
        return this.http.get('/merchant/subscription/payments', { params: query })
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
    public async getClientSubscriptions(query: ClientSubscriptionsRequest): Promise<ClientSubscriptionResponse> {
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
    public async editSubscription(data: EditSubscriptionRequest): Promise<void> {
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
    public async removeSubscription(subscriptionId: string): Promise<void> {
        return this.http.post(`/merchant/subscription/remove?subscriptionId=${subscriptionId}`);
    }
}