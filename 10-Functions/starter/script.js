'use strict';

/* #################################
Defalut parameters
####################################*/

// const creatBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = numPassengers * 200
// ) {
//   // ES5 way of default parameters
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const bookingObj = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(bookingObj); // {flightNum: 'whatever', numPassengers: 1, price: 200}
// };
// creatBooking('whatever', undefined, undefined);

/* #################################
2
####################################*/

// const flight = 'LH234';
// const torin = {
//   name: 'Torin Zhou',
//   passport: 123456,
// };
// const checkIn = function (flightNum, passenger) {
//   // do a strange change
//   flightNum = 'MH333';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 123456) {
//     console.log('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };
// console.log(flight); // LH234
// console.log(torin); // {name: 'Torin Zhou', passport: 123456}
// checkIn(flight, torin);
// console.log(flight); // LH234
// console.log(torin); // {name: 'Mr. Torin Zhou', passport: 123456}

// // primitive are totally different copies, in arguments.
// // when pass to functions: objs are references. point to the same obj.
// // whatever we change the arguments reference, it will affect the original.

/* #################################
3. First Class Functions
####################################*/

/* #################################
4. Functions Accepting Callback Function
####################################*/
// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCae();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   console.log(...others);
//   return [first.toUpperCase(), ...others].join(' ');
// };
// // Higher-Order Function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transfored string: ${fn(str)}`);
//   console.log(`Transforemd by: ${fn.name}`); // fn also has method
// };
// transformer('JavaScript is the best', upperFirstWord); // only passing the function value. not calling it right now.

/* #################################
5. Function return Funtion
####################################*/
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}${name}`);
//   };
// };
// greet('Hello')('Torin');
// // rewrite in arr function
// const greetArr = greeting => name => console.log(`${greeting}${name}`);
// greetArr('Hello')('Torin');

/* #################################
6. The Call and aplly Method
####################################*/
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book : function(flightNum) {
//   // (enhanced mothod iteral)}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`,
//       name,
//     });
//   },
// };
// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// const swiss = {
//   airline: 'Swiss Aie Lines',
//   iataCode: 'LX',
//   bookings: [],
// };
// lufthansa.book(222, 'Torin');
// console.log(lufthansa.bookings);

// const book = lufthansa.book; //take the function out, new reference, in this case the "this keyword" inside of it will now point to undefined.
// book.call(lufthansa, 223, 'Torin'); // call method of functions
// // Torin booked a seat on Lufthansa flight LH223
// book.call(eurowings, 223, 'Torin');
// // Torin booked a seat on Eurowings flight EW223

/* #################################
7. Bind
####################################*/
// // 1
// const bookEU = book.bind(eurowings);
// bookEU(24, 'Kobe Byrant');
// // Kobe Byrant booked a seat on Eurowings flight EW24
// const bookEU23 = book.bind(eurowings, 23);
// bookEU23('Torin');
// // Torin booked a seat on Eurowings flight EW23

// // 2. with event listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// // <button class="buy"> Buy new plane </button>
// // NaN
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// // {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(2), planes: 300, book: ƒ, …}
// // 301

// // Partial application (Bind no this general function)

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 100));
// console.log(addTax.this); // undefine
// const addVAT = addTax.bind(null, 0.23);
// // rewrite with function returen function
// const addTax2 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// // DONE
// const addVAT2 = addTax2(0.5);
// addVAT2(200); // 300

/* #################################
Challange 1
####################################*/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   // 1.1 , 1.2 prompt answer and push to answers
//   // 2 Call this method whenever the user clicks the "Answer poll" button.
//   registerNewAnswer() {
//     let answer = prompt(`${this.question}?\n${this.options.join('\n')}`);
//     if ([0, 1, 2, 3].includes(Number(answer))) {
//       this.answers[answer]++;
//     }
//     this.displayResults.bind(poll)();
//   },
//   // 3.
//   displayResults(type = 'string') {
//     type = prompt('Which type of reuslt would you like to check? ');
//     if (type === 'string' || type === '')
//       return console.log(`Poll results are ${this.answers}`);
//     if (type === 'array') return console.log(this.answers);
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

/* #################################
IIFE
####################################*/
const runOnce = function () {
  console.log('This can be run over and over again');
};
(function () {
  console.log('This will never run again');
})();
(() => console.log('This arrFunction will never run again'))();
/* #################################
CLOUSURE
####################################*/
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount}`);
//   };
// };

// const booker = secureBooking();
// console.dir(booker);
// booker();
// booker();
// booker();
// const a = 5;
// function test() {
//   const b = 6;
// }
// console.dir(test);

/* #################################
Challange
####################################*/
let showDetail;
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  const changeColor = function () {
    header.style.color = 'blue';
  };
  document.querySelector('body').addEventListener('click', changeColor);
  console.dir(changeColor); //sucessiful run
  showDetail = function () {
    console.dir(changeColor);
  };
})();
showDetail(); // sucessiful run
console.dir(changeColor); // undefine
