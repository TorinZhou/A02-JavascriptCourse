'use strict';
/* #################################
Constructure 
####################################*/
// Constructure Funtion construct Obj
const Person = function (firstName, birthYear) {
  console.log(this); // Person {}
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
  // We should use prototype inheritance
  // instead of creat method for each of the instance
};
// NO Arrow Function. No this
const torin = new Person('Torin', 1990);
console.log(torin);
// What new have done:
// 1. a empty obj {} named Person is created
// 2. function is called,  the this keyword point to {} in 1
// 3. {} linked to prototype
// 4. function automatically return {}
// console.log(torin instanceof Person); //true
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);
console.log(torin.__proto__);
// {calcAge: ƒ, constructor: ƒ}
console.log(torin.__proto__ === Person.prototype);
// true
torin.calcAge();
console.log(Person.prototype.isPrototypeOf(torin));
