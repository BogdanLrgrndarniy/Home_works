
$(document).ready(function(){
    $('.autoPlaySlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false
            }
          }
        ]
      });


  
      function resizeWidthOnly(a,b) {  
        var c = [window.innerWidth];
        return onresize = function() {
          var d = window.innerWidth,
              e = c.length;
          c.push(d);
          if(c[e]!==c[e-1]){
            clearTimeout(b);
            b = setTimeout(a, 50);
          } 
        }, a;
      }
      resizeWidthOnly(function() {
        if(window.innerWidth < 768){
            $('.autoPlaySlider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                dots: true
              });
        } else {
          $('.gallery__grid').css({'display': 'grid', 'margin-top': '110px'})
        }
   
    });
  });
  
