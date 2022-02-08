// const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rddf0xwSVTLNIiHbS9z7';

const MoviesApi = ' https://api.tvmaze.com/shows';

const fetchMovies = async () => {
  const response = await fetch(MoviesApi);
  const allMovies = await response.json();

  return allMovies;
};
export default fetchMovies;