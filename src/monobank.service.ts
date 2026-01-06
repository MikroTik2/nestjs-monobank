import { Injectable } from "@nestjs/common";
import { InvoiceService } from './modules/invoice/invoice.service'
import { MerchantService } from './modules/merchant/merchant.service'
import { RefundService } from './modules/refund/refund.service'
import { StatementService } from './modules/statement/statement.service'
import { WalletService } from './modules/wallet/wallet.service'

@Injectable()
export class MonobankService {
	public constructor(
		public invoices: InvoiceService,
		public merchants: MerchantService,
		public refunds: RefundService,
		public statements: StatementService,
		public wallets: WalletService
	) {}
}
