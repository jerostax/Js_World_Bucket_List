import { initMap } from './map';

function init() {
  initMap();
}

// On attache init au scope global
window.init = init;
