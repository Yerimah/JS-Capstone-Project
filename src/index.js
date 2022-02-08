import './style.css';
import logoImage from './assets/Logo.png';
import { getAppID } from './modules/utils.js';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

getAppID();