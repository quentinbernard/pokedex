import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetPokemonsService} from "../get-pokemons.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {
  @Input() id: number;

  pokemon: any;
  audio = new Audio();

  constructor(
    private route: ActivatedRoute,
    private getPokemonsService: GetPokemonsService,
    private location: Location
  ) { }

  ngOnChanges() {
    if(this.id) {
      this.getPokemon(this.id);
      this.audio.src = 'assets/audio/' + this.id + '.mp3';
      this.audio.load();
      this.audio.play();
    }
  }

  getPokemon(id_pokemon): void{
    this.getPokemonsService.getPokemon(id_pokemon)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  playSound() {
    this.audio.play();
  }
}
