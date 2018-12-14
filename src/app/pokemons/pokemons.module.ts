import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule
} from '@angular/material';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {RouterModule} from '@angular/router';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { PokedexComponent } from './pokedex/pokedex.component';
import {FormsModule} from '@angular/forms';
import { SearchPipe } from './_pipe/search.pipe';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatChipsModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ]
})
export class PokemonsModule { }
