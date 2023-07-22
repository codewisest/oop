'use strict';
// const Person = function (firstName, birthyear) {
//   this.firstName = firstName;
//   this.birthyear = birthyear;
// };

// const chiji = new Person('Chiji', 1987);
// console.log(chiji);

// const gloria = new Person('Gloria', 1994);
// console.log(gloria);

// // prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthyear);
// };

// Person.prototype.species = 'Homo Sapien';
// chiji.calcAge();
// console.log(chiji.__proto__);
// console.log(chiji.species);

const Jesus = function (name, title) {
  this.name = name;
  this.title = title;
};

Jesus.prototype.righteous = true;

// If any man be in Christ, he is a new creation
const chijioke = new Jesus('Chijioke', 'Child of God');

console.log(chijioke.hasOwnProperty('righteousness')); // returns false
console.log(chijioke.righteous); // returns true
