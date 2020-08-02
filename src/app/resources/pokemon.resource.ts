import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DefaultRequestService } from './default-request.service';
import { RequestModel } from '../models/request.model';
import { PokemonResponseModel } from '../models/pokemon-response.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonResource {
    constructor(private defaultRequestService: DefaultRequestService) { }

    getPokemonCards(term = ''): Observable<PokemonResponseModel> {
        const request = new RequestModel({
            url: 'https://api.pokemontcg.io/v1/cards',
            params: [
                {
                    key: 'name',
                    value: term
                }

            ]
        });

        return this.defaultRequestService.makeGet<PokemonResponseModel>(request);
    }

    getPokemonById(id: string): Observable<PokemonResponseModel> {
        const request = new RequestModel({
            url: `https://api.pokemontcg.io/v1/cards/${id}`
        });

        return this.defaultRequestService.makeGet<PokemonResponseModel>(request);
    }
}
