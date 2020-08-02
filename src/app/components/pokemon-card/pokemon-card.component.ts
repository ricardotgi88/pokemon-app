import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PokemonModel } from 'src/app/models/pokemon.model';

@Component({
    selector: 'app-pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
    isOpenDetails = false;

    @Input() pokemon: PokemonModel;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
    }

    onCardSelected(): void {
        this.router.navigate(['pokemon-detail', this.pokemon.id]);
    }

    toggleDetail(isOpen: boolean, event: Event): void {
        event.stopPropagation();

        this.isOpenDetails = isOpen;
    }

}
