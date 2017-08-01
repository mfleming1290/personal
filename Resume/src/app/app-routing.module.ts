import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { WidgetComponent } from "./widget/widget.component";
import { WeatherComponent } from "./widget/weather/weather.component";
import { ColorPickerComponent } from "./widget/color-picker/color-picker.component";
import { GotComponent } from "./widget/got/got.component";
import { NinjaComponent } from "./widget/ninja/ninja.component";
import { NinjaCatComponent } from "./widget/ninja-cat/ninja-cat.component";
import { PokedexComponent } from "./widget/pokedex/pokedex.component";
import { StreetFighterComponent } from "./widget/street-fighter/street-fighter.component";
import { GoldComponent } from "./widget/gold/gold.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'section',
    children: [
      {
        path: 'about',
        component: AboutMeComponent
      },
      {
        path: 'widgets',
        component: WidgetComponent,
        children: [
          {
            path: 'weather',
            component: WeatherComponent
          },
          {
            path: 'color',
            component: ColorPickerComponent
          },
          {
            path: 'got',
            component: GotComponent
          },
          {
            path: 'ninja',
            component: NinjaComponent
          },
          {
            path: 'cat',
            component: NinjaCatComponent
          },
          {
            path: 'pokedex',
            component: PokedexComponent
          },
          {
            path: 'streetFighter',
            component: StreetFighterComponent
          },
          {
            path: 'gold',
            component: GoldComponent
          }
        ]
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
