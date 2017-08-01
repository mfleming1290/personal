import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  color;
  x;

  constructor() { }

  ngOnInit() {
    this.random_color()
  }


  random_color() {
      var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
      this.color = '#'  //this is what we'll return!
      for(var i = 0; i < 6; i++)
      {
        this.x = Math.floor((Math.random()*16))
        this.color += rgb[this.x];
      }
      return this.color;
  }

  largeBox() {
    $('#large_box').click(() => {
                 $('#large_box').css('background', this.random_color());
                 $('#large_box').children().css('background', this.random_color());
             })
  }
  sideBox() {
    $('.side_box').click((event) => {
                event.stopPropagation();
                 $('.side_box').siblings().css('background', this.random_color());
             })
  }
  middleBox() {
    $('.middle_box').click((event) => {
                event.stopPropagation();
                $('.middle_box').parent().css('background', this.random_color());
             })
  }

}

          
             
             
             
