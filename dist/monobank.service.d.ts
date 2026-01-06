import { InvoiceService } from './modules/invoice/invoice.service';
import { MerchantService } from './modules/merchant/merchant.service';
import { RefundService } from './modules/refund/refund.service';
import { StatementService } from './modules/statement/statement.service';
import { WalletService } from './modules/wallet/wallet.service';
export declare class MonobankService {
    invoices: InvoiceService;
    merchants: MerchantService;
    refunds: RefundService;
    statements: StatementService;
    wallets: WalletService;
    constructor(invoices: InvoiceService, merchants: MerchantService, refunds: RefundService, statements: StatementService, wallets: WalletService);
}
