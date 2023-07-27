'use strict';
const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;
};

const chiji = new Person('Chiji', 1987);
console.log(chiji);

const gloria = new Person('Gloria', 1994);
console.log(gloria);

// static method
Person.hey = function () {
  console.log('Hey there 🖐');
  console.log(this);
};

Person.hey();
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

// ***********Classss*******************
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      console.log(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there 🖐');
    console.log(this);
  }
}

PersonCl.hey();

const chizoba = new PersonCl('Chizoba Ugwu', 1994);
chizoba.calcAge();
console.log(chizoba);
chizoba.greet();
console.log(chizoba.age);

const walter = new PersonCl('Walter', 1965);

// getters and setters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
