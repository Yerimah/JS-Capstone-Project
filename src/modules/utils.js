const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rddf0xwSVTLNIiHbS9z7';
const MoviesApi = 'https://api.tvmaze.com/shows';
const commentsContainer = document.querySelector('.comments-popup');

const truncateSummary = (string, limit) => {
  if (string.length > limit) {
    return string.substring(0, limit);
  }
  return string;
};

export {
  involvementApi, MoviesApi, commentsContainer, truncateSummary,
};
