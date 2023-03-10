import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonetaryhelpModule } from './monetaryhelp/monetaryhelp.module';

import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({
    isGlobal: true,
    store: redisStore,
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    no_ready_check: true
  }),
  MonetaryhelpModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
