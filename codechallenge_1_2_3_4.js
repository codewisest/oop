const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
const benz = new Car('Mercedes', 95);

bmw.accelerate();
benz.accelerate();

bmw.brake();
benz.brake();

// code challenge 2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed *= 1.6;
  }
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUs);
ford.speedUs = 50;
console.log(ford);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Code challenge 3
const CarEV = function (make, speed, batteryLevel) {
  Car.call(this, make, speed);
  this.batteryLevel = batteryLevel;
};

CarEV.prototype = Object.create(Car.prototype);

CarEV.prototype.chargeBattery = function (chargeTo) {
  this.batteryLevel += chargeTo;
};

CarEV.prototype.accelerate = function () {
  this.speed += 20;
  this.batteryLevel -= 1;
  console.log(
    `Tesla going going at ${this.speed} Km/h with a charge of ${this.batteryLevel}`
  );
};

const tesla = new CarEV('Tesla', 120, 80);

tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();

// challenge 4
class CarEVCL extends CarCl {
  #batteryLevel;
  constructor(make, speed, batteryLevel) {
    super(make, speed);
    this.#batteryLevel = batteryLevel;
  }

  accelerate() {
    this.speed += 20;
    this.#batteryLevel -= 1;
    console.log(this);
    console.log(
      `Tesla going going at ${this.speed} Km/h with a charge of ${
        this.#batteryLevel
      }`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#batteryLevel += chargeTo;
    return this;
  }
}

const latestCar = new CarEVCL('Rivian', 120, 40);
latestCar.accelerate().chargeBattery(30).brake().accelerate();
