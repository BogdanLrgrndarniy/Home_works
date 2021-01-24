$(document).ready(function () {
    $('.icon-arrowDowndown-arrowfa').on('click', function(){
        console.log('good');
        let section = $(this).attr('href')
        let top = $(section).offset().top;
        $('html, body').animate({
          scrollTop: top
        }, 1000)
         
      })
  });
  