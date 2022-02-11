/**
 * @jest-environment jsdom
 */

import { countComments } from '../src/modules/comments.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(
    [
      {
        comment: 'This is nice!',
        creation_date: '2021-01-10',
        username: 'John',
      },
      {
        comment: 'Great content!',
        creation_date: '2021-02-10',
        username: 'Jane',
      },
    ],
  ),
}));

describe('test if comment counter works properly', () => {
  test('counter gives correct number of comments', async () => {
    document.body.innerHTML = '<div>'
      + '<span class="comments-counter"></span>'
    + '</div>';
    const commentsCounter = document.querySelector('.comments-counter');
    await countComments(1);
    expect(commentsCounter.innerHTML).toEqual('(2)');
  });
});
