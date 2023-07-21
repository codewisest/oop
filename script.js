'use strict';
const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;
};

const chiji = new Person('Chiji', 1987);
console.log(chiji);

const gloria = new Person('Gloria', 1994);
console.log(gloria);
