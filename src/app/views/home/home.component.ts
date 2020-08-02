import { Component, OnInit } from '@angular/core';

import { PokemonResource } from 'src/app/resources/pokemon.resource';
import { PokemonModel } from 'src/app/models/pokemon.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [
        PokemonResource
    ]
})
export class HomeComponent implements OnInit {
    pokemons: PokemonModel[];

    constructor(private pokemonResource: PokemonResource) { }

    ngOnInit(): void {
        this.pokemonResource.getPokemonCards().subscribe(res => {
            this.pokemons = res.cards;
            console.log(this.pokemons);
        });
    }

}
