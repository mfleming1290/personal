import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
  gold = 0;
  earned
  activities = []

  constructor() { }

  ngOnInit() {
  }

  farm() {
    let earned = Math.floor(Math.random()*(20-10+1)+10);
    console.log(earned)
    let activity
    this.gold += earned
    if (earned >= 0){
      activity = "You earned" + " " + earned.toString() + " " + "gold  " + "from the farm"
        this.activities.push(activity)
    }
    // if (earned < 0 ){
    //     this.activity += "You lost" + " " + earned.toString() + " " + "gold  " + "from the " 
    // }
    
  }

  cave() {
    let earned = Math.floor(Math.random()*(10-5+1)+5)
    let activity
    
    console.log(earned)
    this.gold += earned
    if (earned >= 0){
      activity = "You earned" + " " + earned.toString() + " " + "gold  " + "from the cave"
        this.activities.push(activity)
    }
  }

  house() {
    let earned = Math.floor(Math.random()*(5-2+1)+2)
    let activity

    console.log(earned)
    this.gold += earned
    if (earned >= 0){
      activity = "You earned" + " " + earned.toString() + " " + "gold  " + "from the house"
        this.activities.push(activity)
    }
  }

  casino() {
    let earned = Math.floor(Math.random()*(50- -50+1)+-50)
    let activity

    console.log(earned)
    this.gold += earned
    if (earned >= 0){
      activity = "You earned" + " " + earned.toString() + " " + "gold  " + "from the casino"
      this.activities.push(activity)
    } else if ( earned < 0) {
      activity = "You lost" + " " + earned.toString() + " " + "gold  " + "from the casino"
      this.activities.push(activity)
    }
  }

  ac() {
    // if (earned >= 0){
    //     this.activity += "You earned" + " " + earned.toString() + " " + "gold  " + "from the "  + " " + Date.toString
    // }
    // if (earned < 0 ){
    //     this.activity += "You lost" + " " + earned.toString() + " " + "gold  " + "from the "  + " " + Date.toString
    // }
  }

}
