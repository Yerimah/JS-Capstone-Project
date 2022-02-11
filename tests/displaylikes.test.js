/**
 * @jest-environment jsdom
 */

import { count } from '../src/modules/displaylikes.js';

describe('test for counting items function', () => {
  test('check if it counts and returns the correct items', async () => {
    document.body.innerHTML = `<span class='.movies-number'></span><main class='main'>
    
    <div class="grid-items">
        <ul class="image-card">
          <img class="movie-art" src="#" alt="">
        </ul>
        <div class="subtitles">
          <h4>#</h4>    
          <span class="Like-container">
          <span><i id="#" class="fa fa-heart bot"></i></span>
          
          <input type="number" id="#" class="counter" value="" name="">
          
          <span id="#">Likes</span>
          </span>   
        </div>
        <div class="movie-btn">
          <button class="common-btn" id="#">Comments</i></button>
          <button class="reserve-btn" data-target="#">Reservation</i></button>
        </div> 
      </div></main>`;
    const countMovie = count();
    expect(countMovie).toBe(1);
  });
});
