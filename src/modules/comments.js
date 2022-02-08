import {
  MoviesApi,
  commentsContainer,
  truncateSummary,
}
from './utils.js';

const openCommentsPopup = async (id) => {
  const response = await fetch(`${MoviesApi}/${id}`);
  const movieData = await response.json();

  const movieName = movieData.name;
  const movieImage = movieData.image.medium;
  const movieLanguage = movieData.language;
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
    <div class="comments-wrapper">
    <button class="close-btn">X</button>
    <div class="top-container">
      <div class="image-and-download">
        <img class="tv-show-image" src="${movieImage}">
        <button class="download-btn" type="button">Download</button>
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
    <div class="bottom-container">
    </div>
    </div>
  `;
  commentsContainer.innerHTML = commentsHTML;
};

export { openCommentsPopup as default };
