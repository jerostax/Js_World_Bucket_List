import { data } from './data';
import { addMarkerOnMap } from './map';

const dreamsContainer = document.querySelector('#dreams-container');

function buildAllDreams() {
  // On veut être sur qu'on ne fait pas de doublons donc on supprime les élèments existant avant de les reconstruire
  // Ici on supprime les enfants du dreamsContainer (tant qu'il y a un dernier enfant, tu l'enlèves)
  while (dreamsContainer.hasChildNodes()) {
    dreamsContainer.removeChild(dreamsContainer.lastChild);
  }
  // Ici on construits nos rêves existant
  data.forEach(buildOneDream);

  function buildOneDream(dream) {
    // On créer un élèment dream avec le code html qu'on veux
    const dreamElement = document.createElement('div');
    // On fais notre template HTML avec nos datas
    dreamElement.innerHTML = ` <div class="card text-center">
            <h4 class="card-header font-weight-bold">
              ${dream.description}
            </h4>
            <img
              src=${dream.imagePath}
              class="card-img-top"
              alt="Image de voyage"
            />
            <div class="card-body">
              <a href="" class="btn btn-${
                dream.done ? 'secondary' : 'danger'
              } btn-block font-weight-bold">
                ${dream.done ? 'Je veux le refaire' : 'Je me lance !'} 
              </a>
            </div>
            <div class="card-footer text-muted text-right">
              <a href="" class="btn btn-outline-secondary btn-sm mr-1"
                >Visiter</a
              ><a href=${dream.link} class="btn btn btn-outline-dark btn-sm">
                Plus d'infos
              </a>
            </div>
          </div>`;

    // On ajoute notre template HTML en enfant du dreamsContainer
    dreamsContainer.appendChild(dreamElement);

    // On construit le Marker sur la map
    addMarkerOnMap(dream);
  }
}

export { buildAllDreams };
