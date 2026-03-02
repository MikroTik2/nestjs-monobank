import { Injectable } from "@nestjs/common";
import { MonobankHttpClient } from "../../core/http/monobank.http-client";
import type { ListResponse, QrResponse } from "./interfaces/responses";

@Injectable()
export class QrService {
    public constructor(public readonly http: MonobankHttpClient) {}

    /**
     * Отримує список усіх QR-кас мерчанта.
     * @returns {Promise<ListResponse>} Список QR-кас.
     * @example
     * const qrList = await this.monobankService.qr.getList();
     * console.log(qrList.list);
     */
    public async getList(): Promise<ListResponse> {
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
    public async getDetails(qrId: string): Promise<QrResponse> {
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
    public async resetAmount(qrId: string): Promise<void> {
        return this.http.post(`/merchant/qr/reset-amount`, { qrId });
    }
}