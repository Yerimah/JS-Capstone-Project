import './style.css';
import logoImage from './assets/Logo.png';
import openCommentsPopup from './modules/comments.js';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

openCommentsPopup(1);

import { displayData } from './modules/reservation.js';
// import { involvementApi, MoviesApi } from './modules/utils.js';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;
window.addEventListener('DOMContentLoaded', () => {
  displayData(2);
});
