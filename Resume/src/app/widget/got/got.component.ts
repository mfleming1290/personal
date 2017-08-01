import { Component, OnInit } from '@angular/core';
import { GotService } from "../../services/got.service";
@Component({
  selector: 'app-got',
  templateUrl: './got.component.html',
  styleUrls: ['./got.component.css']
})
export class GotComponent implements OnInit {
  baratheon: number = 17;
  targaryeon: Number = 378;
  stark: Number = 362;
  lannister: number = 229;
  words;
  
  constructor(private gotService: GotService) { }

  ngOnInit() {
  }

  baratheonGet() {
    console.log('in func')
    this.gotService.getWords(this.baratheon)
    .then(words => this.words = words)
    .catch(err => {console.log(err);})


  }

  targaryenGet() {
    this.gotService.getWords(this.targaryeon)
    .then(words => this.words = words)
    .catch(err => {console.log(err);})
  }

  starkGet() {
    this.gotService.getWords(this.stark)
    .then(words => this.words = words)
    .catch(err => {console.log(err);})
  }

  lannisterGet() {
    this.gotService.getWords(this.lannister)
    .then(words => this.words = words)
    .catch(err => {console.log(err);})
  }

}
