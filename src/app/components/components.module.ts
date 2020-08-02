import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal/modal.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        DefaultLayoutComponent,
        PokemonCardComponent,
        NavbarComponent,
        FooterComponent,
        ModalComponent,
        LoaderComponent
    ],
    exports: [
        DefaultLayoutComponent,
        PokemonCardComponent,
        NavbarComponent,
        FooterComponent,
        ModalComponent,
        LoaderComponent
    ]
})
export class ComponentsModule { }
