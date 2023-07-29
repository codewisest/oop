'use strict';
const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
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

const nathan = new Student('Nathan', 1987, 'Web Development');

nathan.introduce();
nathan.calcAge();

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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am a ${
        2037 - this.birthYear
      } years old student but I am a university student so I feel like I am ${
        2037 - this.birthYear + 10
      } years old`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();

martha.calcAge();

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

// ************** Object.create ********************
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2022;

steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1989);

sarah.calcAge();

// student inherit
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
