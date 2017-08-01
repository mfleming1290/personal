import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../services/pokemon.service";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemon;
  name;
  id;
  types;
  height 
  weight



  constructor(private pokemonService: PokemonService ) { }

  

  ngOnInit() {
  }

  getPokemon(num) {
    console.log('got info', num)
    this.pokemonService.getPokemon(num)
    .then(pokemon => this.pokemon = pokemon)
  }

}
