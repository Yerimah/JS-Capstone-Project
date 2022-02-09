import './style.css';
import logoImage from './assets/Logo.png';
import openCommentsPopup from './modules/comments.js';
import { postComments, getComments } from './modules/comments.js';
import { displayData } from './modules/reservation.js';

// import { involvementApi, MoviesApi } from './modules/utils.js';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

// document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;
// window.addEventListener('DOMContentLoaded', () => {
//   displayData(2);
// });

openCommentsPopup(1);
//postComments(77);
getComments(77);

