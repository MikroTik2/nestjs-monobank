import { InvoiceService } from './modules/invoice/invoice.service';
import { MerchantService } from './modules/merchant/merchant.service';
import { RefundService } from './modules/refund/refund.service';
import { StatementService } from './modules/statement/statement.service';
import { WalletService } from './modules/wallet/wallet.service';
import { SubscriptionService } from "./modules/subscription/subscription.service";
import { WebhookService } from "./modules/webhook/webhook.service";
export declare class MonobankService {
    invoices: InvoiceService;
    merchants: MerchantService;
    refunds: RefundService;
    statements: StatementService;
    wallets: WalletService;
    subscriptions: SubscriptionService;
    webhook: WebhookService;
    constructor(invoices: InvoiceService, merchants: MerchantService, refunds: RefundService, statements: StatementService, wallets: WalletService, subscriptions: SubscriptionService, webhook: WebhookService);
}
