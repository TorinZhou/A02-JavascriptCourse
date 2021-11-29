'use strict';
// // destructuring.
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDelivery: function ({ address = 'privet drive', mainIndex = '4' }) {
//     console.log(address, mainIndex);
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious padta with ${ing1}, ${ing2} ${ing3}`);
//   },
// };

// // Destructuring will come in handy when dealing with API calls
// const { name, openingHours, categories } = restaurant;
// console.log(openingHours);

// // Change name
// const { name: rename, openingHours: hours } = restaurant;
// console.log(rename, hours);

// // defalut value
// // menu dose not even exist, set it with a  default of [], otherwise will get a undifine error.
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// // In this case, a&b are already declared, we have to mutate them with a ().
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// // if simply write {a,b}= obj, will get a syntex error
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// // in case to retrieve Saturday
// const {
//   fri: { open: openDes = 0, close: closeDes = 0 }, // nested Destructuring with rename and a default value.
// } = openingHours;
// console.log(openDes);
// // Destructuring while pass arguments. !!!
// // we pass one obj, and get 2 vars in the funtion. (recieve the obj and do des immediately)
// restaurant.orderDelivery({
//   time: '22.30',
//   address: 'whatever',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // --------2.Spread Operator----------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------

// // 2.1 spread operator
// // ...operator can destructure but don't need to creat new vars.
// const arr2 = [7, 8, 9];
// const badNewARR = [1, 2, arr2[0], arr2[1], arr2[2]];
// console.log(badNewARR);
// // (5) [1, 2, 7, 8, 9]

// const newArr = [1, 2, ...arr2];
// console.log(newArr);
// // (5) [1, 2, 7, 8, 9]
// console.log(...newArr);
// // 1 2 7 8 9

// // 2.1.1 example
// const newMenu = [...restaurant.mainMenu, 'Chinese Noodle'];
// console.log(newMenu);
// console.log(...newMenu);
// // (4) ['Pizza', 'Pasta', 'Risotto', 'Chinese Noodle']
// // Pizza Pasta Risotto Chinese Noodle

// // 2.1.2 example
// // copy arr
// const mainMenuCopy = [...restaurant.mainMenu];
// // join 2 arrays together
// const menuToBeJoin = ['joined'];
// const menuJoined = [...menuToBeJoin, ...mainMenuCopy];
// console.log(menuJoined);

// // Spread Operators work on any iterables (arr, strings,maps, sets....but not obj)

// // 2.2 spread sting
// const str = 'Jonas';
// const letters = [...str, ``, `S.`];
// console.log(letters);
// // (7) ['J', 'o', 'n', 'a', 's', '', 'S.']

// // 2.3  passing spread arguments
// const ingredients = [
//   // prompt("Let's First ingredient"),
//   // prompt(`two`),
//   // prompt('three'),
// ];
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients); // this es6 sytex will be really useful

// // 2.3.1 since es2018 , spread operator also works on objects.
// // even obj are not iterables

// const newRestaurant = { foundedIn: 2021, ...restaurant, founder: `Torin` };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'The Torins';
// console.log(restaurant.name);
// // Classico Italiano
// console.log(restaurantCopy.name);
// // The Torins

/* ################################# 
Rest Pattern and Parameters
##############################*/
// rest is the oppsit way of spread.
// const arr = [1, 2, 3, ...[4, 5, 6]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const restaurant = {
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// };
// const [food1, , food2, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(food1, food2, otherFood);

/* ################################# 
Rest Pattern in objects
###################################*/
// const restaurant2 = {
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// const { sat, ...weekDays } = restaurant2.openingHours;
// console.log(weekDays);
// // {thu: {…}, fri: {…}}
// console.log(sat);
// // {open: 0, close: 24}

/* #################################  
Short Circuiting (&& and ||)
####################################*/
// Use and return any date tyee, short-circuiting, AKA: short circuit evaluation
// Short-circuiting of || : return the first truthy value . or the last falsey value. in this case is 3
// the "whatever" will not even be evaluated.
// console.log(3 || 'whatever');
// // return 3
// console.log('' || 'whatever');
// // whatever
// console.log(Boolean(''));
// // false
// console.log(undefined || undefined);
// // underfined
// console.log(undefined || null);
// // return null
// const restaurant = { numGuests: 100 };
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);
// // if no guests, init guest = 10 , else guest = guest
// // shor-circuit way
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

/* #################################
Short Circuiting2  &&
##############################*/
// console.log(0 && 'whatever');
// // return the first falsy value and short-circuit the second one.
// console.log(1 && 'whatever');
// // return whatever
// console.log(1 && null && 2);
// // return null
// // return the last truthy value. or the first falsy value

// // blowing two are same.
// if(restaurant.orderPizza) {
//   restaurant.orderPizza('whatever');
// }
// restaurant.orderPizza && restaurant.orderPizza('whatever');

/* ################################# 
The Nullish Coalescing Operator (??) since ES2020
####################################*/
// // to fix the following bug.
// const restaurant = { numGuests: 0 };
// const guest = restaurant.numGuests || 10;
// console.log(guest);
// // return 10
// // Nullish: null and undefined (Not 0 or "")
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
// // in this case ?? will return the fist no nullish value.

/* ################################# 
Logical Assignment Operators   since ES2021
####################################*/
// const rest1 = {
//   name: 'capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'zhou',
//   owner: 'torin',
// };
// const rest3 = {
//   name: 'zhou',
//   owner: 'torin',
// };
// const rest4 = {
//   name: 'zhou',
//   owner: 'torin',
//   numGuests: 0,
// };

// // now add a defalut numGuests to them.

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1.numGuests);
// // here is the short way
// rest3.numGuests ||= 10;
// console.log(rest3);
// rest4.numGuests ??= 10;
// console.log(rest4);

// // &&= will come in handy to assign a already defined var.
// // if not defined, nothing happen.
// // if defined, then &&=  to resign .
// // very useful
// rest4.owner &&= 'whatever';
// rest1.owner &&= 'whatever';
// console.log(rest4, rest1);

/* ################################# 
challenge
####################################*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: { team1: 1.33, x: 3.25, team2: 6.5 },
// };

// // TASK 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;

// // TASK 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldPlayers] = players1;

// // TASK 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2]; // note that not game.players.
// // console.log(allPlayers);
// // TASK 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];

// // TASK 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(draw);
// // TASK 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// game.printGoals = function (...scoreList) {
//   for (let i = 0; i < scoreList.length; i++) {
//     console.log(`${scoreList[i]} got the number ${[i + 1]} goal`);
//   }
// };
// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.printGoals(...game.scored);

// // TASK 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// team1 > team2 && console.log('team 2 will win');
// team2 > team1 && console.log('team 1 will win');

/* ################################# 
LOOPING ARRAYS: FOR...OF LOOP
####################################*/
const menu = [1, 2, 3, 4, 5];
// regular loop
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}
// for of loop
for (const num of menu) {
  console.log(num);
}
// for of loop with index
for (const num of menu.entries()) {
  console.log(num); // return 5 arrays.[0,1],[1,2]...[4,5]
}
// let see what is menu.entries
console.log(menu.entries()); // Array Iterator {}
// Not helpful.
console.log([...menu.entries()]); //(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
// well now its clear, menu.entries() itself is a array/
// since every num is an array , we can use destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i}: ${el}`); // important.
}
