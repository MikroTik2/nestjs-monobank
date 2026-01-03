import { MerchantService } from '../merchant/merchant.service';
export declare class WebhookService {
    readonly merchant: MerchantService;
    constructor(merchant: MerchantService);
    /**
    * Верифікує підпис webhook-повідомлення від Monobank.
    *
    * Метод:
    * 1. Отримує публічний ключ мерчанта через Merchant API
    * 2. Декодує підпис з Base64
    * 3. Перевіряє цифровий підпис за алгоритмом SHA256
    *
    * Використовується для гарантії, що webhook:
    * - дійсно надісланий Monobank
    * - не був змінений під час передачі
    *
    * @param {Buffer} rawBody - Сире тіло HTTP-запиту (без JSON.parse).
    * @param {string} xSignBase64 - Значення заголовка `X-Sign` у форматі Base64.
    *
    * @returns {Promise<boolean>}
    * - `true` — підпис валідний
    * - `false` — підпис невалідний
    *
    * @example
    * // controller.ts
    * @Post('/mono-webhook')
    * async handleWebhook(
    *   @Headers('x-sign') xSign: string,
    *   @Req() req: RawBodyRequest<Request>
    * ) {
    *   const isValid = await this.webhookService.verifyWebhookSignature(
    *     req.rawBody,
    *     xSign
    *   );
    *
    *   if (!isValid) {
    *     throw new UnauthorizedException('Invalid webhook signature');
    *   }
    *
    *   // обробка події
    * }
    */
    verifyWebhookSignature(rawBody: Buffer, xSignBase64: string): Promise<boolean>;
}
