import { involvementApi, MoviesApi } from './utils.js';

const popUp = document.createElement('div');
popUp.className = 'pop-up';
const footer = document.querySelector('footer');
document.body.insertBefore(popUp, footer);

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

  const popUpContent = document.createElement('div');
  popUpContent.className = 'pop-content';
  popUpContent.innerHTML = `<div class= image-container><img src=${MovieCover} alt = 'cover picture'></div>
    <div class='description'><h2 class='heading'>${MovieName}</h2><div class=details><div class='block'><span><strong>Language</strong>: ${MovieLanguage}</span>
    <span><strong>Genre</strong>: ${MovieGenre[0]} | ${MovieGenre[1]} | ${MovieGenre[2]}</span></div><div class='block'><span><strong>Duration</strong>: ${MovieDuration} minutes</span>
    <span><strong>Ratings</strong>: ${Movierating} / 10</span></div></div><div class='reserve-form'><h3 class='heading'>Add Reservation</h3><form><input type='text' id='reserver' placeholder='Enter your name'>
    <label for='start-date'>Start Date</label><input type='date' id='start-date' placeholder='Start-date YYYY/MM/DD'>
    <label for='start-date'>End Date</label><input type='date' id='end-date' placeholder='End-date YYYY/MM/DD'>
    <input type='submit' value='Reserve' id='res-btn'></form></div></div>`;
  popUp.appendChild(popUpContent);
};

export const addReservation = (id, username, startDate, endDate) => {

};