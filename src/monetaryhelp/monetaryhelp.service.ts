import { HttpService } from '@nestjs/axios'
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class MonetaryhelpService {
    constructor(private readonly httpService: HttpService, @Inject(CACHE_MANAGER) private cacheService: Cache) {}

    async getMonetaryHelp(code: string) {

        //Check if the data is on cache
        const cachedData = await this.cacheService.get(code);
        if(cachedData) {
            console.log('Got data from cache');
            return cachedData;
        }

        // if not, call the main API and set the response to cache
        const { data } = await this.httpService.axiosRef.get(`https://api.iatistandard.org/datastore/activity/select?q=${code.toUpperCase()}`);
        await this.cacheService.set(code, data);
        console.log('data set to cache');
        return await data;

    }
}
