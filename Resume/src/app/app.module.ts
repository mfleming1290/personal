// **** Modules ****
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

// **** Components ****
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WidgetComponent } from './widget/widget.component';
import { GotComponent } from './widget/got/got.component';
import { ColorPickerComponent } from './widget/color-picker/color-picker.component';
import { WeatherComponent } from './widget/weather/weather.component';
import { NinjaComponent } from './widget/ninja/ninja.component';
import { NinjaCatComponent } from './widget/ninja-cat/ninja-cat.component';
import { PokedexComponent } from './widget/pokedex/pokedex.component';

// **** Services ****
import { WeatherService } from "./services/weather.service";
import { GotService } from "./services/got.service";
import { PokemonService } from "./services/pokemon.service";
import { StreetFighterComponent } from './widget/street-fighter/street-fighter.component';
import { GoldComponent } from './widget/gold/gold.component';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    AboutMeComponent,
    WidgetComponent,
    WeatherComponent,
    ColorPickerComponent,
    GotComponent,
    NinjaComponent,
    NinjaCatComponent,
    PokedexComponent,
    StreetFighterComponent,
    GoldComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [WeatherService, GotService, PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
