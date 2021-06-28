const { createUser, copyArr, includesValue } = require('./reference');

it('should return new user Bob', () => {
  expect(createUser()).toEqual({ name: 'Bob', email: 'bob@bot.com' });
});

it('should return copy of array', () => {
  expect(copyArr([1, 2, 4])).toEqual([1, 2, 4]);
});

it('should contain value', () => {
  const arr = [1, 4, 8];
  const val = 4;
  expect(includesValue(arr, val)).toBeTruthy();
});
