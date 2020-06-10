import { Component, OnInit, Output, Input } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.sass']
})
export class LineComponent implements OnInit {
  @Input() elements : Array<String[]>;
  prop: any;

  constructor() { }

  ngOnInit(): void {
    this.prop = window.innerHeight/this.elements.length;
    //JQUERY FUNCTIONS
    (function ($){
      $(document).ready(()=>{
        //Gets window's height and width
        var width = window.innerWidth;

        //sets onscroll event
        window.addEventListener('scroll',lineFunction);

        //function to change line's width on scroll
        function lineFunction() {
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $("#home-line").css("width","10%");
          } else {
            $("#home-line").css("width","0%");
          }

          var top = (document.documentElement.scrollTop+327)*100/document.documentElement.scrollHeight;
          $("#line-user").css("top", top+"%");
        }

        //Line scroll function
        $(".line-item").on('click', function(event) {

          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
      
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          }
        });
      });
    })(jQuery);
  }

}
