/* eslint-disable import/prefer-default-export */
import { involvementApi, MoviesApi } from './utils.js';

const popUp = document.createElement('div');
popUp.className = 'pop-up';
const footer = document.querySelector('footer');
document.body.insertBefore(popUp, footer);

const addReservation = async (id, Username, startDate, endDate) => {
  const reservation = {
    item_id: id,
    username: Username,
    date_start: startDate,
    date_end: endDate,
  };
  const response = await fetch(`${involvementApi}/reservations/`, {
    method: 'POST',
    body: JSON.stringify(reservation),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return response;
};

const DisplayReservations = async (id, content) => {
  const response = await fetch(`${involvementApi}/reservations?item_id=${id}`);
  const result = await response.json();
  const resContainer = document.createElement('div');
  result.forEach((data) => {
    resContainer.innerHTML += `<p class='reservation-text'>${data.date_start} - ${data.date_end} by ${data.username}</p>`;
  });
  content.appendChild(resContainer);
};

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
  popUpContent.innerHTML = `<div class= image-container><img class='reserve-img'src=${MovieCover} alt = 'cover picture'></div>
    <div class='description'><h2 class='heading'>${MovieName}</h2><div class=details><div class='block'><span><strong>Language</strong>: ${MovieLanguage}</span>
    <span><strong>Genre</strong>: ${MovieGenre[0]} | ${MovieGenre[1]} | ${MovieGenre[2]}</span></div><div class='block'><span><strong>Duration</strong>: ${MovieDuration} minutes</span>
    <span><strong>Ratings</strong>: ${Movierating} / 10</span></div></div><div class='reserve-post'><h3 class='heading'>Reservations</h3><div class='res-container'></div></div><div class='reserve-form'><h3 class='heading'>Add Reservation</h3><form id='res-form'><input type='text' id='reserver' placeholder='Enter your name'>
    <label for='start-date'>Start Date</label><input type='date' id='start-date' placeholder='YYYY/MM/DD'>
    <label for='start-date'>End Date</label><input type='date' id='end-date' placeholder='End-date YYYY/MM/DD'>
    <input type='submit' value='Reserve' id='res-btn'></form></div></div>`;
  popUp.appendChild(popUpContent);
  const username = document.getElementById('reserver');
  const start = document.getElementById('start-date');
  const end = document.getElementById('end-date');
  const form = document.getElementById('res-form');
  const reserveContainer = document.querySelector('.res-container');
  DisplayReservations(id, reserveContainer);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addReservation(id, username.value, start.value, end.value);
    form.reset();
  });
};
