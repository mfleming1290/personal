import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class GotService {

  constructor(private _http: Http) { }

  getWords(house) {
    return this._http.get(`https://anapioficeandfire.com/api/houses/${house}`)
    .map(res => res.json())
    .toPromise()
  }

}
