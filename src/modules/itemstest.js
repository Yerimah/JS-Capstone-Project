import countLikes from './countlikes.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(
    [
      {
        item_id: 4,
        likes: 5,
      },
      {
        item_id: 3,
        likes: 10,
      },
    ],
  ),
}));

describe('test the reservation counter function', () => {
  test('check if it counts and returns the correct likes', async () => {
    const count = await countLikes(3);
    expect(count).toEqual(10);
  });
});
