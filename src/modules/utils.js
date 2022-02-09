const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rddf0xwSVTLNIiHbS9z7';
const MoviesApi = 'https://api.tvmaze.com/shows';
const detailsContainer = document.querySelector('.details-wrapper');
const commentsContainer = document.querySelector('.all-comments');
const userNameInput = document.querySelector('.comment-nameInput');
const userCommentInput = document.querySelector('.comment-insights');
const postCommentsBtn = document.querySelector('.add-comment-btn');
const submissionFail = document.querySelector('.submission-fail');

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
  userNameInput,
  userCommentInput,
  postCommentsBtn,
  submissionFail
};
