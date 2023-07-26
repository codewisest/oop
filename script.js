'use strict';
const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;
};

const chiji = new Person('Chiji', 1987);
console.log(chiji);

const gloria = new Person('Gloria', 1994);
console.log(gloria);

// prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

Person.prototype.species = 'Homo Sapien';
chiji.calcAge();
console.log(chiji.__proto__);
console.log(chiji.species);

const Jesus = function (name, title) {
  this.name = name;
  this.title = title;
};

Jesus.prototype.righteous = true;

// If any man be in Christ, he is a new creation
const chijioke = new Jesus('Chijioke', 'Child of God');

console.log(chijioke.hasOwnProperty('righteousness')); // returns false
console.log(chijioke.righteous); // returns true

// prototype on built-in objects
// top of prototype chain
console.log(chiji.__proto__.__proto__);

const arr = [3, 6, 4, 5, 9, 3, 6, 9];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }
}

const chizoba = new PersonCl('Chizoba', 1994);
chizoba.calcAge();
console.log(chizoba);
chizoba.greet();
