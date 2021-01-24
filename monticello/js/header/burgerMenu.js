$(document).ready(function () {
    $('.header__burger').on('click',function(event){
        $('.header__burger, .header__navMenu').toggleClass('active');
        if($('.header__burger').hasClass('active')){
            $('.header__burger').css({'position': 'fixed', 'top': '15px', 'left': '15px'});
        
        } else {
            $('.header__burger').css({'position': 'relative', 'top': '15px', 'left': '260px'});
         
        }
    })



  });
  