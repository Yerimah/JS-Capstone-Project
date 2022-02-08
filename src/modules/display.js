const display = (movies) => {
  movies.forEach((e) => {
    const list = document.querySelector('#main');
    list.innerHTML += `
      <div class="grid-items">
      <ul class="image-card">
      <img src="${e.image.original}" width="300px" height="400px" alt="">
      </ul>
      <div class="subtitles">
      <h4>${e.name} <i class="fa fa-heart"></i></h4>
      
      
      </div>
      <button id="button">Comments</i></button>
      </div>
    `;
  });
};

export default display;