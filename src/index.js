import './style.css';
import logoImage from './assets/Logo.png';
import openCommentsPopup, { postComments, getComments } from './modules/comments.js';

import {
  // involvementApi,
  // MoviesApi,
  userNameInput,
  userCommentInput,
  postCommentsBtn,
  submissionFail,
} from './modules/utils.js';

// import { displayData } from './modules/reservation.js';

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

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
