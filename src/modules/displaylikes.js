import { involvementApi } from './utils.js';

export const getLikes = async () => {
  const response = await fetch(`${involvementApi}/likes`);
  const data = await response.json();
  return data;
};

export const postLikes = async (id) => {
  const response = await fetch(`${involvementApi}/likes/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },

    body: JSON.stringify({ item_id: id }),
  });
  return response;
};

export const updateLikes = async (id, display) => {
  const response = await fetch(`${involvementApi}/likes`);
  const storeLikes = await response.json();
  storeLikes.forEach((movie) => {
    if (movie.item_id === id) {
      display.value = `${movie.likes}`;
    }
  });
};
 export function count() {
  const main = document.querySelector('.main');
  const children = main.childElementCount;
  return children;
}
export const countHomeMovies = () => {
  const main = document.querySelector('.main');
  const homeMovs = document.querySelector('.movies-number');
  const children = main.childElementCount;
  homeMovs.textContent = `${count()}`;
  return children;
};
