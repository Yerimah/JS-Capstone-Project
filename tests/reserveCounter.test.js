/**
 * @jest-environment jsdom
 */

import { reserveCounter } from '../src/modules/reservation.js';

describe('test the reservation counter function', () => {
  test('check if reservation counter increment', async () => {
    document.body.innerHTML = `<h3></h3><div class='res-container'><p>2022-02-02 - 2022-02-02 by Bertrand</p>
    <p>2022-02-02 - 2022-02-02 by Bertrand</p>
    <p>2022-02-02 - 2022-02-02 by Bertrand</p></div>`;
    const ResContainer = document.querySelector('.res-container');
    const heading = document.querySelector('h3');
    const count = reserveCounter(heading, ResContainer);
    expect(count).toEqual(3);
  });
});
