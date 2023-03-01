import { CacheInterceptor, CacheKey, Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { MonetaryhelpService } from './monetaryhelp.service';

@Controller('monetaryhelp')
export class MonetaryhelpController {
    constructor(private readonly monetaryHelpService: MonetaryhelpService) {}

    @Get(':code')
    getMonetaryHelp( @Param('code') code:string) {
        return this.monetaryHelpService.getMonetaryHelp(code);
    }
    
}
