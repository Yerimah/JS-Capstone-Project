import { involvementApi } from './utils.js';

export const getLikes = async () => {
  const response = await fetch(`${involvementApi}/likes`);
  const data = await response.json();
  console.log(data[0].likes);
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
        if(movie.item_id === id) {
            display.value= `${movie.likes}`
        }
    })






    // let result = 0;
    // storeLikes.forEach((e) => {
    //     if(e.item_id === id) {
    //         result = e.likes;
    //     }
    // })
    // console.log(updateLikes)  
}


// export const addElement = (e) => {
//     const currentNumber = e.innerText;
//     e.innerText = parseInt(currentNumber, 10) + 1
    
// }
// console.log(addElement)

// mainContainer.addEventListener('click', (e) => {
//   if (e.target.className === 'bot') {
//     const likeCount = document.getElementsByClassName('counter');
//     // likeCount.innerHTML = data[0].likes;

//     // likeCount.value = parseInt(likeCount.value) + 1;

//     console.log(likeCount.id)
//   }
// });
