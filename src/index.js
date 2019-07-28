import { initMap } from './map';
import { buildAllDreams } from './dream';

function init() {
  initMap();
  buildAllDreams();
}

// On attache init au scope global
window.init = init;
