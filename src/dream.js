import { data } from './data';
import { addMarkerOnMap, visitDreamOnMap } from './map';

const dreamsContainer = document.querySelector('#dreams-container');

function buildAllDreams() {
  // On veut être sur qu'on ne fait pas de doublons donc on supprime les élèments existant avant de les reconstruire
  // Ici on supprime les enfants du dreamsContainer (tant qu'il y a un dernier enfant, tu l'enlèves)
  while (dreamsContainer.hasChildNodes()) {
    dreamsContainer.removeChild(dreamsContainer.lastChild);
  }
  // Ici on construits nos rêves existant
  data.forEach(buildOneDream);
  // Ici on écoute les clicks sur nos dreams
  addDreamsListeners();
}
function buildOneDream(dream) {
  // On créer un élèment dream avec le code html qu'on veux
  const dreamElement = document.createElement('div');
  // On fais notre template HTML avec nos datas
  dreamElement.innerHTML = ` <div class="card text-center" id='${dream.id}'>
            <h4 class="card-header font-weight-bold">
              ${dream.description}
            </h4>
            <img
              src=${dream.imagePath}
              class="card-img-top"
              alt="Image de voyage"
            />
            <div class="card-body">
              <a href="" class="button-action btn btn-${
                dream.done ? 'secondary' : 'danger'
              } btn-block font-weight-bold">
                ${dream.done ? 'Je veux le refaire' : 'Je me lance !'} 
              </a>
            </div>
            <div class="card-footer text-muted text-right">
              <a href="" class="button-visit btn btn-outline-secondary btn-sm mr-1"
                >Visiter</a
              ><a href=${
                dream.link
              } target="_blank" class="btn btn btn-outline-dark btn-sm">
                Plus d'infos
              </a>
            </div>
          </div>`;

  // On ajoute notre template HTML en enfant du dreamsContainer
  dreamsContainer.appendChild(dreamElement);

  // On construit le Marker sur la map
  addMarkerOnMap(dream);
}

function addDreamsListeners() {
  // On obtient un NodeList avec tous les bouttons ayant la classe btn-visit donc on forEach dessus
  document.querySelectorAll('.button-visit').forEach(item => {
    item.addEventListener('click', event => {
      // A chaque fois qu'un btn est cliqué j'extrais l'id de mon élément et j'éxévute visitDream
      visitDream(item.parentElement.parentElement.getAttribute('id'));
    });
  });
  document.querySelectorAll('.button-action').forEach(item => {
    item.addEventListener('click', event => {
      // A chaque fois qu'un btn est cliqué j'extrais l'id de mon élément et j'éxévute visitDream
      toggleDreamDone(item.parentElement.parentElement.getAttribute('id'));
      // Permet de rafraichir la carte après avoir cliqué
      buildAllDreams();
    });
  });
}

function visitDream(dreamId) {
  // On filtre pour trouver le dream qui à l'id passé en argument et avoir accès à sa position
  let position = data.filter(item => item.id == dreamId)[0].coordinates;
  console.log('DREAM ID', position);
  visitDreamOnMap(position);
}

function toggleDreamDone(dreamId) {
  let dream = data.filter(item => item.id == dreamId)[0];
  dream.done = !dream.done;
}

export { buildAllDreams };
