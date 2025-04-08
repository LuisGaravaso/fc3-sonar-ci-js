const subtract = require('./subtract');

test('subtract 2 - 1 to equal 1', () => {
  expect(subtract(2, 1)).toBe(1);
});
test('subtract 0 - 0 to equal 0', () => {
  expect(subtract(0, 0)).toBe(0);
});