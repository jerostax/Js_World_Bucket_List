let map;
// On initialise la Google Map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 48.855262, lng: 2.346055 },
    zoom: 2.5
  });
  const marker = new google.maps.Marker({
    position: { lat: 48.855262, lng: 2.346055 },
    map: map,
    icon: 'assets/marker.png'
  });
}

export { initMap };
