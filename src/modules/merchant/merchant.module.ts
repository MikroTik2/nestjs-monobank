import { Module } from "@nestjs/common";
import { MerchantService } from "./merchant.service";

@Module({
  providers: [MerchantService],
  exports: [MerchantService]
})
export class MerchantModule {}