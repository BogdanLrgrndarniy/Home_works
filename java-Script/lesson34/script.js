
$(document).ready(function(){
    $('.autoPlaySlider').slick({
     
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true,
      prevArrow: '.arrow_prev',
      nextArrow: '.arrow_next',
   

    })
    console.log($('.autoPlaySlider').length);
  });  