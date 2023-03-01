import { HttpService } from '@nestjs/axios'
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class MonetaryhelpService {
    constructor(private readonly httpService: HttpService, @Inject(CACHE_MANAGER) private cacheService: Cache) {}

    async getMonetaryHelp(code: string) {

        let results: any;
        let isCached = false;

        try {

            // Check if the data is on cache
            const cachedData = await this.cacheService.get(code);
            if(cachedData) {
                isCached = true;
                results = cachedData;
            } else {

                // if not, call the main API and set the response to cache
                const response = await this.httpService.axiosRef.get(`https://api.iatistandard.org/datastore/activity/select?q=${code.toUpperCase()}`);
                

                //This can change in base of response
                results = response.data;
            }

            return {
                fromCache: isCached,
                data: results
            }
        } catch (error) {
            console.log(error);
            return {
                error
            }   
        }
        

    }
}
