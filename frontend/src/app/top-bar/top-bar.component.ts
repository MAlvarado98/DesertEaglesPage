import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (function ($){
      $(document).ready(()=>{
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $("#top-bar").addClass("bar-scrolled");
          } else {
            $("#top-bar").removeClass("bar-scrolled");
          }
        }
      });
    })(jQuery); 
  }

}
