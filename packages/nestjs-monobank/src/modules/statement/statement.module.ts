import { Module } from "@nestjs/common";
import { StatementService } from "./statement.service";

@Module({
     providers: [StatementService],
     exports: [StatementService],
})
export class StatementModule {}