import { Component, OnInit } from '@angular/core';
import { Character } from "../../character";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-street-fighter',
  templateUrl: './street-fighter.component.html',
  styleUrls: ['./street-fighter.component.css']
})
export class StreetFighterComponent implements OnInit {
Character = new Character();
  a;

  constructor() { 
    
  }

  
  

  ngOnInit() {
    
  }



}
