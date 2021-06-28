'use strict';
const people = [
  {
    id: 'it51',
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
    devices: ['laptop', 'phone'],
  },
  {
    id: 'it52',
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 126,
    income: 1300,
    married: false,
    hasCar: true,
    devices: ['tablet', 'phone'],
  },
  {
    id: 'it53',
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
    devices: ['laptop', 'tablet', 'phone', 'drone'],
  },
  {
    id: 'it54',
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
    devices: ['tablet', 'phone'],
  },
  {
    id: 'it55',
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
    devices: ['laptop', 'phone'],
  },
  {
    id: 'it56',
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    devices: ['laptop', 'tablet', 'phone'],
  },
];

// console.log(people);

// 1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.
const printMalesOnly = function (person) {
  // jei lytis === male tai vyras, kiti atvejai moteris
  if (person.sex === 'male') console.log(person);
  //   person.sex === "male" ? console.log(person) : null;
};
console.log('1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.');

// panaudoti printMalesOnly su foreach ant people masyvo
// masyvo pavadinimas . forEach( funkcija 'callback' )
people.forEach(printMalesOnly);
console.log(
  '==================================================================='
);
console.log('');

// 2. Naudojant Array.prototype.forEach atspausdinti visas moteris jaunesnes nei 35 metai.
const printYoungFemales = function (person) {
  if (person.sex === 'female' && person.age < 35) console.log(person);
};
console.log(
  '2. Naudojant Array.prototype.forEach atspausdinti visas moteris jaunesnes nei 35 metai.'
);
people.forEach(printYoungFemales);

// 3. Naudojant Array.prototype.forEach atspausdinti visus žmones kurie turi mašinas.

// 4. Naudojant Array.prototype.forEach atspausdinti visus susituokusius žmones.
console.clear();
console.log(
  '4. Naudojant Array.prototype.forEach atspausdinti visus susituokusius žmones.'
);

people.forEach(function (person) {
  if (person.married) console.log(person);
});

// 5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių lytį.
function printSexIfHasCar(person) {
  if (person.hasCar) console.log(person.sex);
}
console.clear();
console.log(
  '5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių lytį.'
);
people.forEach(printSexIfHasCar);

// 6. Naudojant Array.prototype.forEach ir globalius kintamuosius,
//    suskaičiuoti vairuojančių moterų ir vyrų kiekius, bei juos atspausdinti.

// globalus kintamais
let drivingMaleCount = 0;
let drivingFemaleCount = 0;

const countDrivers = function (person) {
  if (person.hasCar) {
    // visi kurie turi automobilius
    // terenary operator
    person.sex === 'male' ? drivingMaleCount++ : drivingFemaleCount++;
  }
};
people.forEach(countDrivers);

console.log('drivingMaleCount', drivingMaleCount);
console.log('drivingFemaleCount', drivingFemaleCount);
// for primitive values galim taip isloginti.
console.log({ drivingMaleCount, drivingFemaleCount });

// 7. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva su objektais, kurie turės savybes sex ir income
console.clear();
console.log(
  '7. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva su objektais, kurie turės savybes sex ir income'
);

function lytisIrPajamos(person) {
  const result = {
    sex: person.sex,
    income: person.income,
  };
  return result;
}

const sexAndIncome = people.map(lytisIrPajamos);

console.log('sexAndIncome', sexAndIncome);

// 8. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva pakeičiant savybę 'income' į 'salary'
// spread operator.

const renameIncome = function (person) {
  //   const renamed = {
  //     name: person.name,
  //     surname: person.surname,
  //     sex: person.sex,
  //     age: person.age,
  //     salary: person.income,
  //     married: person.married,
  //     hasCar: person.hasCar,
  //   };
  // = zenklas neperkopijuoja reference tipo reiksmiu
  //   const localPersonCopy = person;
  //
  const localPersonCopy = { ...person }; // sukuriam seklia kopija kad nepakeisti orginalo
  localPersonCopy.salary = person.income;
  delete localPersonCopy.income;
  return localPersonCopy;
};
console.clear();
console.log(
  '8. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva pakeičiant savybę'
);

console.log(people.map(renameIncome));
console.log(people);

// 9. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva kuriame nebūtų lyties, vardo ir pavardės
function noSexNameSurname(person) {
  // pasidarom vietine localia seklia kopija
  const localPerson = { ...person };
  // istrinam ko neturi buti galutiniam masyve
  delete localPerson.sex;
  delete localPerson.surname;
  delete localPerson.name;
  // grazinam nutrinta objekta
  return localPerson;
}
console.clear();
console.log(
  '9. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva kuriame nebūtų lyties, vardo ir pavardė'
);

let nutrintas = people.map(noSexNameSurname);
console.table(nutrintas);
console.table(people);

// 10. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyvą kur savybės name ir surname būtų pakeistos viena savybe - fullname

let nameSurnameArr = people.map((person) => {
  // nusikopojuoti objekta
  const localPerson = { ...person };
  delete localPerson.name;
  delete localPerson.surname;
  // sukuriam nauja savybe
  localPerson.fullname = `${person.name} ${person.surname}`;
  return localPerson;
});
console.log('10 uzd ===========');

console.table(nameSurnameArr);

// 11. extra parasyti funkcija kuri is isrikiuoja masyva pagal amziu
// https://www.w3schools.com/jsref/jsref_sort.asp

console.clear();

console.log(people);

// tinka skaitinem reiksmem
people.sort((a, b) => b.age - a.age);

// tinka ir textam
people.sort((a, b) => {
  //   if (a.surname < b.surname) return 1;
  //   return -1;

  return a.surname < b.surname ? 1 : -1;
});

console.log('after sort', people);
console.table(people, ['age', 'name', 'income']);
