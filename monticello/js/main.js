$(document).ready(function () {

    //burgerMenu
    $('.header__burger').on('click',function(event){
        $('.header__burger, .header__navMenu').toggleClass('active');
        if($('.header__burger').hasClass('active')){
            $('.header__burger').css({'position': 'fixed', 'top': '15px', 'left': '15px'});
        
        } else {
            $('.header__burger').css({'position': 'relative', 'top': '15px', 'left': '260px'});
         
        }
    })

    //changeBackGround
    let changeBackGroundDiv = document.querySelectorAll(
        ".changeBackGround-Items__circle"
      );
      let headerBackground = document.querySelector("header");
      let count = 0;
      
      
      let sliderHeader = function () {
        for (let i = 0; i < changeBackGroundDiv.length; i++) {
          changeBackGroundDiv[i].addEventListener("click", function (event) {
            if (changeBackGroundDiv[i].classList.contains("li-Active") === false) {
              for (let j = 0; j < changeBackGroundDiv.length; j++) {
                if (changeBackGroundDiv[j].classList.contains("li-Active")) {
                  changeBackGroundDiv[j].classList.remove("li-Active");
                }
              }
              changeBackGroundDiv[i].classList.add("li-Active");
            }
      
            if (count === 1) {
              headerBackground.classList.remove("active-changeBackGround");
              count = 0;
            } else if (
              headerBackground.classList.contains("active-changeBackGround") ===
                false &&
              count === 0
            ) {
              headerBackground.classList.add("active-changeBackGround");
              count += 1;
              console.log(count);
            }
          });
        }
      };
      
      sliderHeader();


      //header__down-arrow
      $('.icon-arrowDowndown-arrowfa').on('click', function(){
        console.log('good');
        let section = $(this).attr('href')
        let top = $(section).offset().top;
        $('html, body').animate({
          scrollTop: top
        }, 1000)
         
      })


    //   /headerNavMenu
      let elementLi = document.querySelectorAll('li');

for(let i = 0; i < elementLi.length; i++){

    elementLi[i].addEventListener('click', function(event){
        if(elementLi[i].classList.contains('li-Active') === false){
            for(let j = 0; j < elementLi.length; j++){
                if(elementLi[j].classList.contains('li-Active')){
                    elementLi[j].classList.remove('li-Active');
                }
            }
            elementLi[i].classList.add('li-Active');
        }
    });
    
}

// /scrollToSection
$('.nav__link').on('click', function(){
    let section = $(this).attr('href')
    let top = $(section).offset().top - 20
    $('html, body').animate({
      scrollTop: top
    }, 1000)
     
  })


  //slider
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

//upArrow-scroll

let upButton = document.querySelector('.header__scrollTop');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }

};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};



//footer valid Form
$('#submitButton').on('click',function(){
    if($('#nameCompany').val().length < 7){
      $('.errorUserName').css({'position':'relative', 'bottom': '30px', 'color': 'red' });
      $('.errorUserName').html('Ведите больше 7 символов');
       return false;
    } 
  
  });
  position: relative;
  

  });
  