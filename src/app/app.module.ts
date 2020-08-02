import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PokemonDetailComponent } from './views/pokemon-detail/pokemon-detail.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ComponentsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        PokemonDetailComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
