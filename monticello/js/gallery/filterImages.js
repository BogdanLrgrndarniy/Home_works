$(document).ready(function () {
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
      
      /* используйте функцию resizeWidthOnly вместо window.onresize   */
      // $('.gallery__grid').css({'display': 'grid', 'margin-top': '110px'})
      resizeWidthOnly(function() {
          if(window.innerWidth < 1176){
            $('.gallery__grid').css({'display': 'flex', 'margin-top': '110px'})
          } else {
            $('.gallery__grid').css({'display': 'grid', 'margin-top': '110px'})
          }
     
      });
    let filter = $('[data-filter]');
    filter.on('click', function(event){
        event.preventDefault();
    let cat = $(this).data('filter');
    if(cat == 'all'){
        $('[data-cat]').removeClass('hide');
  
        
    } else {
        // $('.gallery__grid').css({'display': 'flex', 'height' : '438px'})
        $('[data-cat]').each(function(){
            let workCat = $(this).data('cat');
            
            if(workCat != cat){
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }
    
        })
    }
    console.log(cat)

    });
  });
  