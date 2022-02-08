// const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rddf0xwSVTLNIiHbS9z7';
// const MoviesApi = ' https://api.tvmaze.com/shows';
// export { involvementApi, MoviesApi };

const fetchMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const allMovies = await response.json();

  return allMovies;
};
export default fetchMovies;