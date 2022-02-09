/**
 * @jest-environment jsdom
 */

import { reserveCounter } from '../src/modules/reservation.js';

test('check if reservation counter increment', () => {
  const id = 2;
  const div = document.createElement('h3');
  div.innerHTML = '';
  reserveCounter(id, div);
  expect().toBe('(8)');
});
