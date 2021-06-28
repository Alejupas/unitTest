const { typeOf } = require('react-is');
const { returnDrivers, allPeople, noSexNameSurname } = require('./tasks');

const people = allPeople();

test('should return object with drivers', () => {
  const testArray = [
    { hasCar: true, sex: 'male' },
    { hasCar: true, sex: 'male' },
    { hasCar: false, sex: 'male' },
    { hasCar: true, sex: 'female' },
    { hasCar: true, sex: 'female' },
    { hasCar: true, sex: 'female' },
    // {male: 2, female: 3}
  ];

  testArray.forEach((p) => {
    // expect(Object.keys(p).includes('sex')).toBe(true)
    expect(Object.keys(p)).toContain('sex');
  });

  expect(returnDrivers(testArray)).toEqual({ male: 2, female: 3 });
});

test('age should be number', () => {
  expect(people.length).toBeGreaterThan(0);
  // patikrinti kad visi age butu skaiciai
  people.forEach((p) => {
    expect(typeof p.age).toBe('number');
  });

  // expect(people[0].id).toBe('number')
});

it('noSexNameSurname ', () => {
  expect(noSexNameSurname(people[0])).toEqual({
    id: 'it53',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
    devices: ['laptop', 'tablet', 'phone', 'drone'],
  });
});
