import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MonetaryhelpController } from './monetaryhelp.controller';
import { MonetaryhelpService } from './monetaryhelp.service';

@Module({
  imports: [HttpModule],
  controllers: [MonetaryhelpController],
  providers: [MonetaryhelpService]
})
export class MonetaryhelpModule {}
