import {MoviesApi} from './utils.js';


// eslint-disable-next-line import/prefer-default-export
export const displayData = async (id) => {
  const respone = await fetch(`${MoviesApi}/${id}`);
  const result = await respone.json();

  const MovieName = result.name;
  const MovieLanguage = result.language;
  const MovieGenre = result.genres;
  const MovieDuration = result.runtime;
  const Movierating = result.rating.average;
  const MovieCover = result.image.original;
  const popUp = document.createElement('div');
  popUp.className = 'pop-up';
  const footer = document.querySelector('footer');
  document.body.insertBefore(popUp, footer);
  const popUpContent = document.createElement('div');
  popUpContent.className = 'pop-content';
  popUpContent.innerHTML = `<div class= image-container><img src=${MovieCover} alt = 'cover picture'></div>
    <h3 class='heading'>${MovieName}</h3><div class=details><div class='block'><span><strong>Language</strong>: ${MovieLanguage}</span>
    <span><strong>Genre</strong>: ${MovieGenre[0]} | ${MovieGenre[1]} | ${MovieGenre[2]}</span></div><div class='block'><span><strong>Duration</strong>: ${MovieDuration} minutes</span>
    <span><strong>Ratings</strong>: ${Movierating} / 10</span></div></div>`;
  popUp.appendChild(popUpContent);
};