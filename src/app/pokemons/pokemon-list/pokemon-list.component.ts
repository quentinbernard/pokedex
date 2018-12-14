import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GetPokemonsService} from '../get-pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Output() idChange = new EventEmitter<number>();

  public search:any = '';
  pokemons: any[];
  offset = 20;
  limit = 10;

  constructor(
    private getPokemonsService: GetPokemonsService
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.getPokemonsService.getPokemonsWithQueryParams(0, 20)
      .subscribe(pokemons => this.pokemons = pokemons.data);
  }

  displayDetails(id): void {
    this.idChange.emit(id);
  }

  onScroll(): void {
    console.log('scroll');
    this.getPokemonsService.getPokemonsWithQueryParams(this.offset, this.limit)
      .subscribe(pokemons => pokemons.data.forEach(item => {
        this.pokemons.push(item);
    }));
    this.offset += 10;
  }

}
