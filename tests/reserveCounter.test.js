/**
 * @jest-environment jsdom
 */

import { reserveCounter } from '../src/modules/reservation.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(

    [
      {
        username: 'Bertrand',
        date_start: '2022-02-01',
        date_end: '2022-02-05',
      },
      {
        username: 'Bertrand',
        date_start: '2022-02-01',
        date_end: '2022-02-05',
      },
    ],
  ),
}));

describe('test the reservation counter function', () => {
  test('check if reservation counter increment', async () => {
    const div = document.createElement('h3');
    const count = await reserveCounter(1, div);
    expect(count).toEqual(2);
  });

  test('check if counter number is being displayed', async () => {
    const div = document.createElement('h3');
    const count = await reserveCounter(1, div);
    expect(div.innerHTML).toEqual('<span>(2)</span>');
    expect(count).toEqual(2);
  });
});
