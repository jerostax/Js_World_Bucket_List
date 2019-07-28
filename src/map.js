let map;
// On initialise la Google Map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 48.855262, lng: 2.346055 },
    zoom: 2.5
  });
}

function addMarkerOnMap(dream) {
  const marker = new google.maps.Marker({
    position: dream.coordinates,
    map: map,
    icon: dream.done ? 'assets/marker-done.png' : 'assets/marker.png'
  });
}

export { initMap, addMarkerOnMap };
