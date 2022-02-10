import './style.css';
import logoImage from './assets/Logo.png';
import { updateLikes, postLikes } from './modules/displaylikes.js';

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

import { postComments, getComments } from './modules/comments.js';

// import { displayData } from './modules/reservation.js';

const starter = async () => {
  const data = await fetchMovies();
  await display(data);
};

starter();

document.querySelector('.logo').innerHTML = `<a href="#"><img class="logoImg" src="${logoImage}" alt="Cinimash" /></a>`;

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

// postLikes(17);

mainContainer.addEventListener('click', (e) => {
  if (e.target.className === 'fa fa-heart bot') {
    const str = e.target.id;
    const id = parseInt(str, 10);
    postLikes(id);
    const container = e.target.parentElement.nextElementSibling;
    updateLikes(id, container);
  }
});
