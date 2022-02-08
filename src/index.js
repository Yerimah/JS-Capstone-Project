import './style.css';
import logoImage from './assets/Logo.png';
import { displayData } from './modules/reservation.js';
// import { involvementApi, MoviesApi } from './modules/utils.js';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;
window.addEventListener('DOMContentLoaded', () => {
  displayData(2);
});
