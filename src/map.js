let map;
const resetMapButton = document.querySelector('#reset-map');
// On initialise la Google Map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 48.855262, lng: 2.346055 },
    zoom: 2.5
  });

  // On éxécute cette fonction pour réagir au clique sur le bouton réinitialiser la carte
  addMapListeners();
}

// Pour réinitialiser la map
function addMapListeners() {
  resetMapButton.addEventListener('click', resetMap);
}

// Pour ajouter nos markers sur la map
function addMarkerOnMap(dream) {
  const marker = new google.maps.Marker({
    position: dream.coordinates,
    map: map,
    icon: dream.done ? 'assets/marker-done.png' : 'assets/marker.png'
  });
  //On réagit au clique et on ajoute la fonction qui permet le zoom en satellite sur la position
  marker.addListener('click', function() {
    zoomOn(marker.getPosition());
  });
  // Pour définir le zoom, la position et le mode satellite au clic
  function zoomOn(position) {
    map.setZoom(20);
    map.setCenter(position);
    map.setMapTypeId('satellite');
  }
}
function resetMap() {
  map.setZoom(2);
  map.setCenter({ lat: 48.855262, lng: 2.346055 });
  map.setMapTypeId('roadmap');
}

export { initMap, addMarkerOnMap };
