import './style.css';
import logoImage from './assets/Logo.png';

import {
  fetchMovies,
  // involvementApi,
  // MoviesApi,
  userNameInput,
  userCommentInput,
  postCommentsBtn,
  submissionFail,
  mainContainer,
} from './modules/utils.js';
import display from './modules/display.js';

import openCommentsPopup, { postComments, getComments } from './modules/comments.js';

import { displayData } from './modules/reservation.js';

// import { displayData } from './modules/reservation.js';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

const starter = async () => {
  const data = await fetchMovies();
  await display(data);
};

starter();

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

mainContainer.addEventListener('click', (e) => {
  if (e.target.className === 'reserve-btn') {
    const id = e.target.getAttribute('data-target');
    displayData(id);
  }
});
// window.addEventListener('DOMContentLoaded', () => {
//   displayData(2);
// });

postCommentsBtn.addEventListener('click', () => {
  if (userNameInput.value !== '' && userCommentInput.value !== '') {
    postComments(100);
    userNameInput.value = '';
    userCommentInput.value = '';
  } else {
    submissionFail.innerHTML = 'Submission failed. Please try again.';
  }
  getComments(100);
});

openCommentsPopup(22);
getComments(100);
