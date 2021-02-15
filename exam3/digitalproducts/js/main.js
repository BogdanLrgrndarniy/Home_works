$(document).ready(function () {

$('.menu-toggle').on('click', function(){
    $('body').toggleClass('open');
  });


  //fixed menu Scroll
 
  let header__topContent = document.querySelector('.header__topContent');

  window.onscroll = function () {
    if (window.pageYOffset > 1) {
        header__topContent.classList.add('header__topContentFixed');
        $('.header__logo').addClass('header__logoFixed');
        $('.header__navMenu').addClass('header__navMenuFixed');
    } else {
        header__topContent.classList.remove('header__topContentFixed');
        $('.header__logo').removeClass('header__logoFixed');
        $('.header__navMenu').addClass('header__navMenuFixed');
    }
  
  };
  
  
  
  
//   slick.slider
  $(document).ready(function(){
    $('.recent-Works').slick({
      prevArrow: '.arrow_prev',
      nextArrow: '.arrow_next',
      slidesToShow: 1,
      dots: true,
      dotsClass: 'my-dots',
    });
    $('.multiple-items').slick({
      slidesToShow: 3,
      slidesToScroll: 2, 
      prevArrow: '.ourTeam__arrow_prev',
      nextArrow: '.ourTeam__arrow_next',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },

      ]
    });
  });


//////outgoing-blocks

let outgoingBlocks = document.querySelector('.outgoing-blocks');
let outgoingBlocksAdress__text = document.querySelector('.outgoing-blocksAdress__text');
let outgoingBlocksNumberPhone__Text = document.querySelector('.outgoing-blocksNumberPhone__Text');
outgoingBlocks.addEventListener('mouseover', function(event){
    let target = event.target;
    console.log(target.className);
    if(target.tagName != 'DIV'){
        outgoingBlocksAdress__text.innerHTML = '';
        outgoingBlocksNumberPhone__Text.innerHTML = '';
    } else if(target.className === 'outgoing-blocksAdress__text'){
        outgoingBlocksAdress__text.textContent = 'Ikan Piranha Atas 220C  Malang - East Java Indonesia';
    } else if(target.className === 'outgoing-blocksNumberPhone__Text'){
        outgoingBlocksNumberPhone__Text.textContent = '+380957124848';
    }
    
})

outgoingBlocks.addEventListener('mouseout', () =>{
    outgoingBlocksAdress__text.textContent = '';
    outgoingBlocksNumberPhone__Text.textContent = '';
})

});

//GoogleMap


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -7.9298338221350955, lng: 112.64497124787346},
      zoom: 17,
      styles: [
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f7f1df"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#d0e3b4"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#fbd3da"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#bde6ab"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffe15f"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#efd151"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "black"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#cfb2db"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a2daf2"
                }
            ]
        }
    ]
      
      
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng( -7.9298338221350955,112.64497124787346),
      map: map,
      icon: '/Home_works/exam3/digitalproducts/images/getInTouch/Pin.png',
      title: 'Hi..!'
    });
    map.addListener("click", (e) => {
      placeMarkerAndPanTo(e.latLng, map);
    });
  }
  
  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
      icon: '/Home_works/exam3/digitalproducts/images/getInTouch/Pin.png',
    });
    map.panTo(latLng);
  }
  