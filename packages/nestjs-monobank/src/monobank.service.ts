import { Injectable } from "@nestjs/common";
import { InvoiceService } from './modules/invoice/invoice.service'
import { MerchantService } from './modules/merchant/merchant.service'
import { StatementService } from './modules/statement/statement.service'
import { WalletService } from './modules/wallet/wallet.service'
import { SubscriptionService } from "./modules/subscription/subscription.service";
import { WebhookService } from "./modules/webhook/webhook.service";
import { QrService } from "./modules/qr/qr.service";

@Injectable()
export class MonobankService {
	public constructor(
		public invoices: InvoiceService,
		public merchants: MerchantService,
		public statements: StatementService,
		public wallets: WalletService,
		public qr: QrService,
        public subscriptions: SubscriptionService,
        public webhook: WebhookService
	) {}
}
