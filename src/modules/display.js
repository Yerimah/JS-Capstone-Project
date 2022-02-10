const display = (movies) => {
  movies.forEach(async (e, index) => {
    const list = document.querySelector('.main');
    if (index < 24) {
      list.innerHTML += `
      <div class="grid-items">
      <ul class="image-card">
      <img class="movie-art" src="${e.image.medium}" alt="">
      </ul>
      <div class="subtitles">
      <h4>${e.name}</h4>    
      <span class="Like-container">
      <span><i id="${e.id}" class="fa fa-heart bot"></i></span>
      
      <input type="number" id="c-${e.id}" class="counter" value="" name="">
       
      <span id="${e.id}">Likes</span>
      </span>   
      </div>
      <div class="movie-btn">
      <button class="common-btn" id="${e.id}">Comments</i></button>
      <button class="reserve-btn" data-target="${e.id}">Reservation</i></button>
       </div> 
      </div>
    `;
    }
  });
};

export default display;