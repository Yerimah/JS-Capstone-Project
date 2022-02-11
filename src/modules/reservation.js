/* eslint-disable import/prefer-default-export */
import { involvementApi, MoviesApi } from './utils.js';

const popUp = document.createElement('div');
popUp.className = 'reserve-pop-up';
const footer = document.querySelector('footer');

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
  result.reverse();
  result.forEach((data) => {
    content.innerHTML += `<p class='reservation-text'>${data.date_start} - ${data.date_end} by ${data.username}</p>`;
  });
};
const updateResDom = async (id, content, div) => {
  const response = await fetch(`${involvementApi}/reservations?item_id=${id}`);
  const result = await response.json();
  const recent = result.length - 1;
  const resText = document.createElement('p');
  resText.className = 'reservation-text';
  resText.innerHTML += `${result[recent].date_start} - ${result[recent].date_end} by ${result[recent].username}`;
  content.prepend(resText);
  const resCounter = content.childElementCount;
  div.textContent = `(${resCounter})`;
};
export const reserveCounter = (div, content) => {
  if (content.childElementCount === 0) {
    div.textContent = ' (0)';
  } else {
    const ResNumber = content.childElementCount;
    div.textContent = `(${ResNumber})`;
    return ResNumber;
  }
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
  document.body.insertBefore(popUp, footer);
  const popUpContent = document.createElement('div');
  popUpContent.className = 'res-pop-content';
  popUpContent.innerHTML = `<div class='res-image-container'><img class='reserve-img'src=${MovieCover} alt = 'cover picture'></div><button class='res-close-btn'>X</button>
    <div class='description'><h2 class='heading'>${MovieName}</h2><div class=details><div class='block'><span><strong>Language</strong>: ${MovieLanguage}</span>
    <span><strong>Genre</strong>: ${MovieGenre[0]} | ${MovieGenre[1]} | ${MovieGenre[2]}</span></div><div class='block'><span><strong>Duration</strong>: ${MovieDuration} minutes</span>
    <span><strong>Ratings</strong>: ${Movierating} / 10</span></div></div><div class='reserve-post'><h3 class='heading'>Reservations<span class='h-reserve'></span></h3><div class='res-container'></div></div><div class='reserve-form'><h3 class='heading'>Add Reservation</h3><form id='res-form'><input type='text' id='reserver' placeholder='Enter your name'>
    <label for='start-date'>Start Date</label><input type='date' id='start-date' placeholder='YYYY/MM/DD'>
    <label for='start-date'>End Date</label><input type='date' id='end-date' placeholder='End-date YYYY/MM/DD'>
    <input type='submit' value='Reserve' id='res-btn'></form></div></div>`;
  popUp.appendChild(popUpContent);
  const username = document.getElementById('reserver');
  const start = document.getElementById('start-date');
  const end = document.getElementById('end-date');
  const form = document.getElementById('res-form');
  const reserveContainer = document.querySelector('.res-container');
  const resHeader = document.querySelector('.h-reserve');
  const closeBtn = document.querySelector('.res-close-btn');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(popUp);
    window.location.reload();
  });
  await DisplayReservations(id, reserveContainer);
  await reserveCounter(resHeader, reserveContainer);
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await addReservation(id, username.value, start.value, end.value);
    await updateResDom(id, reserveContainer, resHeader);
    form.reset();
  });
};
