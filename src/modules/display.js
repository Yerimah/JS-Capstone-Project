const display = (movies) => {
  movies.forEach((e, index) => {
    const list = document.querySelector('.main');
    if (index < 24) {
      list.innerHTML += `
      <div class="grid-items">
        <ul class="image-card">
          <img class="movie-art" src="${e.image.medium}" alt="">
        </ul>
        <div class="subtitles">
          <h4>${e.name} <i class="fa fa-heart"></i></h4>
        </div>
        <div class="movie-btn">
          <button class="common-btn" id="${e.id}">Comments</i></button>
          <button class="reserve-btn" id="R${e.id}">Reservation</i></button>
        </div> 
      </div>
    `;
    }
  });
};

export default display;