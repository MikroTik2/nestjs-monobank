import { Module } from '@nestjs/common'
import { WebhookService } from './webhook.service'
import { MerchantModule } from "../merchant/merchant.module";

@Module({
    imports: [
        MerchantModule
    ],
	providers: [WebhookService],
	exports: [WebhookService]
})
export class WebhookModule {}