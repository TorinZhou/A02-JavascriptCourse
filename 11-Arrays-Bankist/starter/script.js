'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/* #################################
Arr1
####################################*/
// // slice
// let arr = ['a', 'b', 'c', 'd', 'e'];
// [...arr]; //[abcde]
// arr.slice(); // [abcde]
// arr.slice(1); // [bcde]
// arr.slice(-1); // [e]
// arr; // [abcde]
// // splice
// arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.splice()); //[]
// console.log(arr);
// console.log(arr.splice(-1)); //[a, b, c, d,]; remove last one
// console.log(arr); //[a, b, c, d]
// console.log(arr.splice(1, 3)); // [b, c, d] ; take 2 ele
// console.log(arr); //[a]

// // Reverse
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); //[fghij]
// console.log(arr2); //[fghij]

// // concat
// const arr3 = ['a', 'b'];
// const arr4 = ['c', 'd'];
// console.log(arr3.concat(arr4)); //[abcd]
// console.log(arr3); //[ab]
// console.log(arr4); //[cd]
// console.log([...arr3, ...arr4]); // [abcd]

// //join
// console.log(arr3.concat(arr4).join('🎈')); // a🎈b🎈c🎈d

/* #################################
Arry2
####################################*/
// const arr = [22, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0)); // [0] means index  at(0) means position
// // get the last element
// console.log(arr[arr.length - 1]); //64
// console.log(...arr.slice(-1)); //64
// console.log(arr.slice(-1)[0]); //64
// console.log(arr.at(-1)); //64 👏👏👏

/* #################################
Array3 forEach 🆚 for...of 
####################################*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// movements.forEach(function (movement) {
//   if (movement > 0) return console.log(`You deposited😂 ${movement}`);
//   if (movement < 0) return console.log(`You withdrew😊 ${Math.abs(movement)}`);
// }); // forEach will call the callback function, pass in current element as argument for the callback function.
// // 0: function(200)
// // 1: function(450)
// // 2: function(-400)
// // We ues a callback function to tell a higherOrder function exactly what it should do

// // access the counter variable in the for...of loop
// console.dir(movements.entries()); // Array Iterator
// for (const [i, movement] of movements.entries()) {
//   console.log(`${i}`); //0 1 2 3 4 5 6 7
// }
// movements.forEach(function (mov, i, arr) {
//   console.log(`${i}:${mov} of [${arr}]`);
// });

// // the order of mov,i,arr is important. beasuse they are what forEach() will pass.(When it call the callback) We are just take it using our own callback function.
// // in forEach :[ele,i,correntArr]
// // in arr.entries() :[i,ele]

// // break,continue

/* #################################
arr4 maps sets foreach
####################################*/
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const a = new Set(['USD', 'USD', 'GBP', 'EUR', 'EUR']);
// a.forEach(function (value,key) {
//   console.log(` ${value}`); //
// });

/* #################################
challange
####################################*/
// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little. Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite. Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
// Your tasks: 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
//1,2,3 ✔✔✔✔✔✔✔✔
const ownersEatToomuch = [];
const ownersEatToolittle = [];
dogs.forEach(function (dog) {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
  if (dog.curFood > 1.1 * dog.recommendedFood) {
    dog.food = 'Too Much';
    ownersEatToomuch.push(...dog.owners);
  } else if (dog.curFood < 0.9 * dog.recommendedFood) {
    dog.food = 'Too Low';
    ownersEatToolittle.push(...dog.owners);
  } else {
    dog.food = 'normal';
  }
});

for (const dog of dogs) {
  if (dog.owners.includes(`Sarah`)) {
    console.log(`Sarah's dog is eating ${dog.food}`);
    break;
  }
}
console.log(dogs, ownersEatToolittle, ownersEatToomuch);
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

function myFunction(arr) {
  return arr.slice().filter(ele => ele === arr[0]).length === arr.length;
}
console.log(myFunction([1, 1, 2, 1]));
