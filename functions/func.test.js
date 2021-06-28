//isitraukti reikiama funkcija
const { add, divide } = require('./func');

//test, 1. ka testuojam, 2. arrow funkcija
test('add function should add 5 and 10 to get the sum of 15', () => {
  //tikimes naudojant add funkcija su arg 5, 10  gausim 15
  expect(add(5, 10)).toBe(15);
  expect(add(1, 5)).toBe(6);
});

test('20 divided by 2 should be 10', () => {
  expect(divide(20, 2)).toBe(10);
});

test('divide by 0 returns null', () => {
  expect(divide(20, 0)).toBe(null);
  expect(divide(20, 0)).toBeNull();
  expect(divide(20, 0)).toBeDefined();
});

// if (add(1, 6) !== 7) throw new Error('wrong');
