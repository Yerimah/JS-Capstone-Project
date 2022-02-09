import './style.css';
import logoImage from './assets/Logo.png';

import { fetchMovies } from './modules/utils.js';
import display from './modules/display.js';

import openCommentsPopup, { postComments, getComments } from './modules/comments.js';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

const starter = async () => {
  const data = await fetchMovies();
  await display(data);
};

starter();

// import { displayData } from './modules/reservation.js';

// import { involvementApi, MoviesApi } from './modules/utils.js';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

// window.addEventListener('DOMContentLoaded', () => {
//   displayData(2);
// });

openCommentsPopup(1);
postComments(101);
getComments(77);
