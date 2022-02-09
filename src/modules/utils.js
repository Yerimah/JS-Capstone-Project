const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rddf0xwSVTLNIiHbS9z7';

const MoviesApi = 'https://api.tvmaze.com/shows';

const fetchMovies = async () => {
  const response = await fetch(MoviesApi);
  const allMovies = await response.json();

  return allMovies;
};

const detailsContainer = document.querySelector('.details-wrapper');
const commentsContainer = document.querySelector('.all-comments');

const truncateSummary = (string, limit) => {
  if (string.length > limit) {
    return string.substring(0, limit);
  }
  return string;
};

export {
  involvementApi,
  MoviesApi,
  detailsContainer,
  commentsContainer,
  truncateSummary,
  fetchMovies,
};
