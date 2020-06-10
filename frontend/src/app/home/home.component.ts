import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  elementsVal: Array<String[]> = [
    ["Temporada","img","first-logo.png"],
    ["Actividades","img","logo-white-mini.png"],
    ["Patrocinadores","img","sponsors-icon.png"]
  ];

  constructor() {
  }

  ngOnInit(): void {
    (function ($){
      $(document).ready(()=>{
        //Gets window's height and width
        var width = window.innerWidth;
        var height = window.innerHeight;

        //Sets boxes's height
        $("#box-1").css("height",height+"px");
        $("#box-2").css("height",height+"px");
        $("#box-3").css("height",height+"px");

        //sets onscroll event
        window.addEventListener('scroll',lineFunction);

        //function to change line's width on scroll
        function lineFunction() {
          
        }
        //Set activities height
        $(".actividad").css("height", height*.77+"px");

      });
    })(jQuery);
  }

}
