import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

import { PokemonResource } from 'src/app/resources/pokemon.resource';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime} from 'rxjs/operators';
import { ArrayTools } from 'src/app/core/tools/array.tools';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [
        PokemonResource
    ]
})
export class HomeComponent implements OnInit, OnDestroy {
    /**
     * Referência Html ao input de pesquisa de itens.
     */
    @ViewChild('searchInput') searchInput: ElementRef;
    /**
     * Lista de cartas dos pokémon exibidas na página.
     */
    pokemons: PokemonModel[];
    /**
     * Indica se a pesquisa está sendo executada.
     */
    isSearching = false;
    /**
     * Subject de pesquisa de itens do menu
     */
    searchSubject = new BehaviorSubject('');
    private subscription = new Subscription();

    constructor(private pokemonResource: PokemonResource) { }

    ngOnInit(): void {
        this.filter();

        const sub = this.searchSubject.pipe(
            debounceTime(300)
        ).subscribe(term => {
            this.filter(term);
        });

        this.subscription.add(sub);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private filter(term = ''): void {
        this.isSearching = true;
        this.pokemons = [];
        this.pokemonResource.getPokemonCards(term).subscribe(res => {
            if (res.cards && res.cards.length > 0) {
                this.pokemons = ArrayTools.sort(res.cards, 'name');
            }

            this.isSearching = false;
        });
    }
}
