import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonResource } from 'src/app/resources/pokemon.resource';
import { ModalService } from 'src/app/components/modal/modal.service';
import { PokemonAttackModel } from 'src/app/models/pokemon-attack.model';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
    pokemon: PokemonModel;
    bodyText: string;
    selectedAttack: PokemonAttackModel;
    modalId = 'attack-details';

    private subscription = new Subscription();

    constructor(
        private pokemonResource: PokemonResource,
        private activatedRoute: ActivatedRoute,
        private modalService: ModalService
    ) { }

    ngOnInit(): void {
        this.bodyText = 'This text can be updated in modal 1';

        const sub = this.activatedRoute.paramMap.subscribe(p => {
            const id = p.get('id');

            this.pokemonResource.getPokemonById(id).subscribe(res => {
                this.pokemon = res.card;
            });
        });

        this.subscription.add(sub);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    openModal(selectedAttack: PokemonAttackModel) {
        this.modalService.open(this.modalId);
        this.selectedAttack = selectedAttack;
    }

    closeModal() {
        this.modalService.close(this.modalId);
        this.selectedAttack = undefined;
    }

}
