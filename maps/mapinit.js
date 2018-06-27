var map;
var Lat=-34.397;
var Lng=150.644;
var Zoom=8;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: Lat, lng: Lng},
          zoom: Zoom
        });
      }