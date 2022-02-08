import './style.css';
import logoImage from './assets/Logo.png';
import fetchMovies from './modules/utils.js';
import display from './modules/display.js';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

const starter = async () => {
  const data = await fetchMovies();
  await display(data);
};

starter();
