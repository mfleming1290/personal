import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-ninja',
  templateUrl: './ninja.component.html',
  styleUrls: ['./ninja.component.css']
})
export class NinjaComponent implements OnInit {
  title = 'abgular 4 with jquery';


  constructor() { }

  ngOnInit() {
  }

  toggleNinja() {
     $('.ninjaPic').click(function(){
                    $(this).hide(this);
                });
  }

  reviveNinja() {
    $('.ninjaButton').click(function() {
        if ( $('.ninjaPic').is(':hidden')  ) {
            $('.ninjaPic').show();
        }
    });
  }


}

          