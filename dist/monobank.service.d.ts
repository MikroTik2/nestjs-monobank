import { InvoiceService } from './modules/invoice/invoice.service';
import { MerchantService } from './modules/merchant/merchant.service';
import { StatementService } from './modules/statement/statement.service';
import { WalletService } from './modules/wallet/wallet.service';
import { SubscriptionService } from "./modules/subscription/subscription.service";
import { WebhookService } from "./modules/webhook/webhook.service";
import { QrService } from "./modules/qr/qr.service";
export declare class MonobankService {
    invoices: InvoiceService;
    merchants: MerchantService;
    statements: StatementService;
    wallets: WalletService;
    qr: QrService;
    subscriptions: SubscriptionService;
    webhook: WebhookService;
    constructor(invoices: InvoiceService, merchants: MerchantService, statements: StatementService, wallets: WalletService, qr: QrService, subscriptions: SubscriptionService, webhook: WebhookService);
}
