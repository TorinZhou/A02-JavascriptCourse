'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ address = 'privet drive', mainIndex = '4' }) {
    console.log(address, mainIndex);
  },
};

// Destructuring will come in handy when dealing with API calls
const { name, openingHours, categories } = restaurant;
console.log(openingHours);

// Change name
const { name: rename, openingHours: hours } = restaurant;
console.log(rename, hours);

// defalut value
// menu dose not even exist, set it with a  default of [], otherwise will get a undifine error.
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
// In this case, a&b are already declared, we have to mutate them with a ().
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// if simply write {a,b}= obj, will get a syntex error
({ a, b } = obj);
console.log(a, b);

// Nested Objects
// in case to retrieve Saturday
const {
  fri: { open: openDes = 0, close: closeDes = 0 }, // nested Destructuring with rename and a default value.
} = openingHours;
console.log(openDes);
// Destructuring while pass arguments. !!!
// we pass one obj, and get 2 vars in the funtion. (recieve the obj and do des immediately)
restaurant.orderDelivery({
  time: '22.30',
  address: 'whatever',
  mainIndex: 2,
  starterIndex: 2,
});
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
// destructuring.
