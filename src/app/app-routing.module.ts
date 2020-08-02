import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './components/layouts/default-layout/default-layout.component';
import { HomeComponent } from './views/home/home.component';
import { PokemonDetailComponent } from './views/pokemon-detail/pokemon-detail.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'pokemon-detail/:id', component: PokemonDetailComponent }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
