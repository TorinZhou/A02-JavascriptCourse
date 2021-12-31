'use strict';
// /* #################################
// Constructure
// ####################################*/
// // Constructure Funtion construct Obj
// const Person = function (firstName, birthYear) {
//   console.log(this); // Person {}
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // Never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
//   // We should use prototype inheritance
//   // instead of creat method for each of the instance
// };
// // NO Arrow Function. No this
// const torin = new Person('Torin', 1990);
// console.log(torin);
// // What new have done:
// // 1. a empty obj {} named Person is created
// // 2. function is called,  the this keyword point to {} in 1
// // 3. {} linked to prototype
// // 4. function automatically return {}
// // console.log(torin instanceof Person); //true
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// console.log(Person.prototype);
// console.log(torin.__proto__);
// // {calcAge: ƒ, constructor: ƒ}
// console.log(torin.__proto__ === Person.prototype);
// // true
// torin.calcAge();
// console.log(Person.prototype.isPrototypeOf(torin));

// console.log(torin.__proto__);
// console.log(torin.__proto__.__proto__);
// console.log(torin.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [1, 2, 2, 2, 2];

// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__ === torin.__proto__.__proto__);
// console.log(Object.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// h1; // OBJ
// h1.__proto__; // HTMLHeadingElement
// h1.__proto__.__proto__; // HTMLElement
// h1.__proto__.__proto__.__proto__; // Element
// h1.__proto__.__proto__.__proto__.__proto__; // Node
// h1.__proto__.__proto__.__proto__.__proto__.__proto__; // EventTarget
// h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__; // Object
// h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__; // Null

// const test = function (x) {
//   return x + 1;
// };
// console.dir(test.__proto__);
// console.dir(test.__proto__.__proto__);

// console.dir(x => x + 1);
// console.dir((x => x + 1).__proto__); // anonymous()
// console.dir((x => x + 1).__proto__.__proto__); // OBJ

// /* #################################

// Challange
// ####################################*/
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/h.`);
// };
// const car1 = new Car('bmw', 120);
// console.dir(car1);
// car1.accelerate();
// car1.accelerate();
// car1.accelerate();

// /* #################################

// class
// ####################################*/

// /* #################################
// getter setter
// ####################################*/
// const account = {
//   owner: 'torin',
//   movements: [200, 300, 400],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest); //400
// account.latest = 999; // [200, 300, 400 999]
// // its OK to have the same name

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
// }
// const torin1 = new PersonCl('Torin', 1990);
// console.log(torin1);

// // What if I wanna set a already exist property ?
// // Use setter to implement validation.
// class Account {
//   constructor(password) {
//     if (password.length > 8) {
//       this.password = password;
//     }
//   }
// }
// const account1 = new Account('123456789');
// console.log(account1);
// account1.password = '123';
// console.log(account1);
// // now That's bad. My lenght check only happens at construting phase.

// class AccountFix {
//   constructor(password) {
//     this.password = password;
//   }
//   set password(pass) {
//     if (pass.length > 6) this._password = pass;
//     else console.log('too short');
//   }
//   get password() {
//     return this._password;
//   }
//   // faked this.password property.
// }

// const account2 = new AccountFix('123456789');
// console.log(account2.password); // 123456789
// account2.password = '123';
// console.log(account2.password); // 123456789
// const account3 = new AccountFix('123');
// console.log(account3); // OBJ with no property

// /* #################################
// creat
//  ####################################*/

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
//   // this has nothon to do with constructor fn
// };
// const steven = Object.create(PersonProto);
// steven.init('Sarah', 1999);
// steven.calcAge();

// /* #################################
// challange2
// ```
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// ```

// ####################################*/

// class CarCl {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speedInput) {
//     this.speed = speedInput * 1.6;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.brand} going at ${this.speed} km/h.`);
//   }
// }
// const ford = new CarCl('Ford', 240);
// console.log(ford.speedUS); //150
// ford.speedUS = 60;
// console.log(ford.speedUS); // 60
// ford.accelerate(); // Ford going at 106 km/h.

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// const Student = function (firstName, birthYear, course) {
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   // OR
//   // Person(firstName, birthYear)
//   // This Person() won't work
//   // cause in rugular fn(without new) ,this=>undefine
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);
// // Object.create will return an empty object (but linked)
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName}`);
// };
// const torin = new Student('Torin', 1990, 'Gramma');
// torin.introduce();
// torin.calcAge();
// console.log(torin);
// console.dir(Student.prototype.constructor);
// ƒ Person(firstName, birthYear)

// - challenge

//   > Your tasks:

//   > 1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)

//   > 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'

//   > 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'

//   > 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉

//   > Test data: § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

// class CarCl {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speedInput) {
//     this.speed = speedInput * 1.6;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.brand} going at ${this.speed} km/h.`);
//   }
// }
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h.`);
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (charteTo) {
  this.charge = charteTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
const tesla = new EV('Tesla', 120, 99);
tesla.accelerate();
EV.prototype.consturtor = EV;
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(100);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
