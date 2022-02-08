import './style.css';
import logoImage from './assets/Logo.png';
import { involvementApi, MoviesApi } from './modules/utils.js';
import movieItem from './modules/moviebank';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

const HomepageUI = async () => {
    const section = document.querySelector('section');
    section.innerHTML = movieItem();
    console.log(HomepageUI)
}