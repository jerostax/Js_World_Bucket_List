let map;
let panorama;
const panoramaElement = document.querySelector('#panorama');

const resetMapButton = document.querySelector('#reset-map');
const backToMapButton = document.querySelector('#back-to-map');
// On initialise la Google Map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 48.855262, lng: 2.346055 },
    zoom: 2.5,
    streetViewControl: false
  });

  // On créer notre Google Street View
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById('panorama'),
    {
      position: { lat: 48.855262, lng: 2.346055 },
      pov: {
        heading: 34,
        pitch: 10
      }
    }
  );

  // On éxécute cette fonction pour réagir au clique sur le bouton réinitialiser la carte
  addMapListeners();
  // Par défaut je cache l'élément panorama
  panoramaElement.style.display = 'none';
  backToMapButton.style.display = 'none';
}

// Pour réinitialiser la map
function addMapListeners() {
  resetMapButton.addEventListener('click', resetMap);
  backToMapButton.addEventListener('click', backToMap);
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
}
// Pour définir le zoom, la position et le mode satellite au clic
function zoomOn(position) {
  map.setZoom(20);
  map.setCenter(position);
  map.setMapTypeId('satellite');
}
// La fx qui reset la map
function resetMap() {
  map.setZoom(2);
  map.setCenter({ lat: 48.855262, lng: 2.346055 });
  map.setMapTypeId('roadmap');
}

function backToMap() {
  panoramaElement.style.display = 'none';
  backToMapButton.style.display = 'none';
  resetMapButton.style.display = 'block';
}

function visitDreamOnMap(position) {
  panorama.setPosition(position);
  panoramaElement.style.display = 'block';
  backToMapButton.style.display = 'block';
  resetMapButton.style.display = 'none';
}

export { initMap, addMarkerOnMap, visitDreamOnMap };
