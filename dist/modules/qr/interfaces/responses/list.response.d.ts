import type { QrResponse } from "./qr.response";
/**
 * Відповідь API при отриманні списку QR-кас
 */
export interface ListResponse {
    /** Список QR-кас */
    list: QrResponse[];
}
