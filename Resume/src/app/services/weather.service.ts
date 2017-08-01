import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(value) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${value},us&mode=json&units=imperial&APPID=b628b88a922fb9217a4a3ad5af59ae20`)
    .map(res => res.json())
    .toPromise()
  }

}
