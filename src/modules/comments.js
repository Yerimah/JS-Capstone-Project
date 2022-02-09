import {
  MoviesApi,
  involvementApi,
  detailsContainer,
  commentsContainer,
  truncateSummary,
  userNameInput,
  userCommentInput,
  postCommentsBtn,
}
from './utils.js';

const openCommentsPopup = async (id) => {
  const response = await fetch(`${MoviesApi}/${id}`);
  const movieData = await response.json();

  const movieName = movieData.name;
  const movieImage = movieData.image.medium;
  const movieLanguage = movieData.language;
  const movieDownload = movieData.officialSite;
  const movieRating = movieData.rating.average;
  const movieSummary = truncateSummary(movieData.summary, 350);

  let movieGenres = '';
  const genreArray = movieData.genres;
  genreArray.forEach((genre, index) => {
    if (index < genreArray.length - 1) {
      movieGenres += `${genre}, `;
    } else {
      movieGenres += genre;
    }
  });

  const commentsHTML = `
      <button class="close-btn">X</button>
      <div class="top-container">
        <div class="image-and-download">
          <img class="tv-show-image" src="${movieImage}">
          <button class="download-btn" type="button">
            <a class="download-link" href="${movieDownload}" target="_blank">Download</a>
          </button>
        </div>
        <div class="tv-show-info">
          <h3 class="tv-show-title">${movieName}</h3>
          <div class="tv-shows-genres">
            <strong>Genre: </strong>${movieGenres}
          </div>
          <div class="lang-and-rating">
            <p class="tv-show-language"><strong>Language: </strong>${movieLanguage}</p>
            <p class="tv-show-rating"><strong>Rating: </strong>${movieRating}</p>
          </div>
          <div class="summary-div">
            <strong>SUMMARY: </strong><br>
            ${movieSummary}
          </div>
        </div>
      </div>
    `;
  detailsContainer.innerHTML = commentsHTML;
};

postCommentsBtn.addEventListener('click', () => {
  // console.log(userNameInput.value);
  // console.log(userCommentInput.value);
});

export const postComments = async (id) => {
  await fetch(`${involvementApi}/comments?item_id=${id}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: '100',
      username: `"${userNameInput.value}"`,
      comment: `"${userCommentInput.value}"`,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

export const getComments = async (id) => {
  const response = await fetch(`${involvementApi}/comments?item_id=${id}`);
  const commentsData = await response.json();
  const reversedData = commentsData.reverse();

  let allComments = '';
  reversedData.forEach((comment) => {
    allComments
    += `
      <div class="single-comment">
        <div class="comment-date">${comment.creation_date}</div>
        <p class="name-and-message"><strong>${comment.username}: </strong>${comment.comment}</p>
      </div>
    `;
  });
  commentsContainer.innerHTML = allComments;
};

export { openCommentsPopup as default };
