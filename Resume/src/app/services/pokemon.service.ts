import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class PokemonService {

  constructor(private _http: Http) { }

  getPokemon(id) {
    return this._http.get(`http://pokeapi.co/api/v2/pokemon/${id}/`)
    .map(res => res.json())
    .toPromise()
  }

}
