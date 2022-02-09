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
  commentsButton,
  bigCommentsDiv,
  detailsContainer
} from './modules/utils.js';

import display from './modules/display.js';

import openCommentsPopup, { postComments, getComments } from './modules/comments.js';

// import { displayData } from './modules/reservation.js';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

const starter = async () => {
  const data = await fetchMovies();
  await display(data);
};

starter();

// import { displayData } from './modules/reservation.js';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

// window.addEventListener('DOMContentLoaded', () => {
//   displayData(2);
// });

mainContainer.addEventListener('click', (event) => {
  if (event.target.className === "common-btn") {
    let commentID = event.target.id
    openCommentsPopup(commentID);
    bigCommentsDiv.style.display = 'block';
  }
})

detailsContainer.addEventListener('click', (event) => {
  if (event.target.className === "close-btn") {
    console.log('Close Btn')
    
  }
})

// postCommentsBtn.addEventListener('click', () => {
//   if (userNameInput.value !== '' && userCommentInput.value !== '') {
//     postComments(100);
//     userNameInput.value = '';
//     userCommentInput.value = '';
//   } else {
//     submissionFail.innerHTML = 'Submission failed. Please try again.';
//   }
//   getComments(100);
// });

openCommentsPopup(7);
getComments(100);
