import './style.css';
import display from './modules/display.js';

import
{
  cinimashLogo,
  fetchMovies,
  userNameInput,
  userCommentInput,
  submissionFail,
  postCommentsBtn,
  mainContainer,
  bigCommentsDiv,
  detailsContainer,
  LogoContainer,
}
from './modules/utils.js';

import
{
  openCommentsPopup,
  postComments,
  getComments,
  countComments,
}
from './modules/comments.js';

LogoContainer.innerHTML = cinimashLogo;

const starter = async () => {
  const data = await fetchMovies();
  await display(data);
};

starter();

mainContainer.addEventListener('click', async (event) => {
  if (event.target.className === 'common-btn') {
    const commentID = event.target.id;
    bigCommentsDiv.style.display = 'block';
    await openCommentsPopup(commentID);
    await getComments(commentID);
    await countComments(commentID);
  }
});

postCommentsBtn.addEventListener('click', async (event) => {
  const allComments = event.target.parentElement.parentElement.previousElementSibling;
  const singleComment = allComments.querySelector('.single-comment');
  if (userNameInput.value !== '' && userCommentInput.value !== '') {
    const movieID = singleComment.id;
    await postComments(movieID);
    await getComments(movieID);
    await countComments(movieID);
    userNameInput.value = '';
    userCommentInput.value = '';
  } else {
    submissionFail.innerHTML = 'Submission failed. Please try again.';
  }
});

detailsContainer.addEventListener('click', (event) => {
  if (event.target.className === 'close-btn') {
    bigCommentsDiv.style.display = 'none';
  }
});

userNameInput.addEventListener('click', () => {
  submissionFail.innerHTML = '';
});

userCommentInput.addEventListener('click', () => {
  submissionFail.innerHTML = '';
});
