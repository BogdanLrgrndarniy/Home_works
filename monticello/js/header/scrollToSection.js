$('.nav__link').on('click', function(){
    let section = $(this).attr('href')
    let top = $(section).offset().top - 20
    $('html, body').animate({
      scrollTop: top
    }, 1000)
     
  })