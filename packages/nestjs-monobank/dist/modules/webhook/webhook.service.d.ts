import { MerchantService } from '../merchant/merchant.service';
export declare class WebhookService {
    readonly merchant: MerchantService;
    constructor(merchant: MerchantService);
    verifyWebhookSignature(rawBody: Buffer, xSignBase64: string): Promise<boolean>;
}
