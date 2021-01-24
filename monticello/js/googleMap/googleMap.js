


function initMap() {
    const bangalore = { lat: 12.97, lng: 77.59 };
    new google.maps.Map(document.getElementById("map"), {
        mapId: "bb24ca14f0d31349",
        center: { lat: 48.85, lng: 2.35 },
        zoom: 12,
      });

      marker = new google.maps.Marker({
        map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {  lat: 48.85, lng: 2.35 },
      });
      marker.addListener("click", toggleBounce);
    }
    
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
  // This event listener calls addMarker() when the map is clicked.
  
  }