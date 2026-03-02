import { MonobankHttpClient } from "../../core/http/monobank.http-client";
import type { ListResponse, QrResponse } from "./interfaces/responses";
export declare class QrService {
    readonly http: MonobankHttpClient;
    constructor(http: MonobankHttpClient);
    /**
     * Отримує список усіх QR-кас мерчанта.
     * @returns {Promise<ListResponse>} Список QR-кас.
     * @example
     * const qrList = await this.monobankService.qr.getList();
     * console.log(qrList.list);
     */
    getList(): Promise<ListResponse>;
    /**
     * Отримує деталі конкретної QR-каси.
     * @param {string} qrId - Ідентифікатор QR-каси, яку потрібно отримати.
     * @returns {Promise<QrResponse>} Деталі QR-каси.
     * @example
     * const qrDetails = await this.monobankService.qr.getDetails('123456');
     * console.log(qrDetails.pageUrl);
     */
    getDetails(qrId: string): Promise<QrResponse>;
    /**
     * Видаляє суму оплати конкретної QR-каси.
     * @param {string} qrId - Ідентифікатор QR-каси, для якої потрібно скинути суму.
     * @returns {Promise<void>} Порожня відповідь при успішному видаленні суми.
     * @example
     * await this.monobankService.qr.resetAmount('XJ_DiM4rTd5V');
     * console.log('Суму було видалено');
     */
    resetAmount(qrId: string): Promise<void>;
}
