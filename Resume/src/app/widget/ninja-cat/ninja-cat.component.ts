import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-ninja-cat',
  templateUrl: './ninja-cat.component.html',
  styleUrls: ['./ninja-cat.component.css']
})
export class NinjaCatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  swap() {
    $('img').click(function() {
                    $(this).attr({
                    src: $(this).attr('data-alt-src')
                    , 'data-alt-src': $(this).attr('src')})
                });
  }

}

                
      