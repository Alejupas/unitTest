//isitraukti reikiama funkcija
const { add, divide, showValue, notMoreThan } = require('./func');

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

it('should be falsy', () => {
  // expect(showValue(5)).toBeFalsy();
  expect(showValue(0)).toBeFalsy();
  expect(showValue(' ')).toBeFalsy();
  expect(showValue(undefined)).toBeFalsy();
  expect(showValue(null)).toBeFalsy();
  expect(showValue([].length)).toBeFalsy();
  expect(showValue({})).toBeFalsy();
  expect(showValue(Object.keys({}).length)).toBeFalsy();
});

// if (add(1, 6) !== 7) throw new Error('wrong');

test('should less than 400(val)', () => {
  expect(notMoreThan(400)).toBe(true);
  expect(notMoreThan(400)).not.toBe(false);
  expect(350).toBeLessThan(400);
  expect(350).toBeLessThanOrEqual(400);
});

//string regex
it('team should not contain I', () => {
  expect('teamI').not.toMatch(/I/);
  expect('+3706215242').toMatch(/\+370/);
  expect('+3746215242').toMatch(/\+370/);
});
