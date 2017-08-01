import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../services/weather.service";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  check = { city: '' }
  weather;
  humidity;
  temperatureAvg;
  temperatureHigh;
  temperatureLow;
  status;

  constructor(private weatherService: WeatherService) { }

  getWeather() {
    console.log(this.check.city);
    this.weatherService.getWeather(this.check.city)
    .then(weather => {
      this.weather = weather
      this.humidity = weather.main.humidity
      this.temperatureAvg = weather.main.temp
      this.temperatureHigh = weather.main.temp_max
      this.temperatureLow = weather.main.temp_min
      this.status = weather.weather[0].description
    })
    .catch(err => {console.log(err);})
    
  
  }

  ngOnInit() {
  }

}
