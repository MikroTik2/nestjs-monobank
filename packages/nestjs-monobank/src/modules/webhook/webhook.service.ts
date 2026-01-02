import { Injectable } from '@nestjs/common'
import { MerchantService } from '../merchant/merchant.service'

import * as crypto from 'crypto'

@Injectable()
export class WebhookService {
	public constructor(public readonly merchant: MerchantService) {}

	public async verifyWebhookSignature(rawBody: Buffer, xSignBase64: string): Promise<boolean> {
		const { key: publicKeyBase64 } = await this.merchant.getMerchantPubkey();

		const sign = Buffer.from(xSignBase64, "base64");
		const publicKey = Buffer.from(publicKeyBase64, "base64");

		const verifier = crypto.createVerify("SHA256");
		verifier.write(rawBody);
		verifier.end();

		return verifier.verify({ key: publicKey, format: "pem", type: "spki" }, sign);
	}
}