'use strict';
/* #################################
DESTRUCTURING
####################################*/
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

/* #################################
2.Spread Operator
####################################*/

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
// const newMenu = [...restauMenu, rant.main'Chinese Noodle'];
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

// Spread Operators work on any iterables (arr, strings,maps, sets....but not obj)

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
// const menu = [1, 2, 3, 4, 5];
// // regular loop
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }
// // for of loop
// for (const num of menu) {
//   console.log(num);
// }
// // for of loop with index
// for (const num of menu.entries()) {
//   console.log(num); // return 5 arrays.[0,1],[1,2]...[4,5]
// }
// // let see what is menu.entries
// console.log(menu.entries()); // Array Iterator {}
// // Not helpful.
// console.log([...menu.entries()]); //(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
// // well now its clear, menu.entries() itself is a array/
// // since every num is an array , we can use destructuring
// for (const [i, el] of menu.entries()) {
//   console.log(`${i}: ${el}`); // important.
// }

/* ################################# 
ENHANCED OBJECT LITERALS (creat an object literally in code)
####################################*/

// // 1.  add obj to obj
// const obj1 = {
//   name: 'torin',
// };
// const obj2 = {
//   home: 'harbin',
//   // obj1: obj1,
//   obj1, // in es6, no need to write obj1:obj1, just obj1,
// };
// console.log(obj2);
// // 2. writing methods.
// const obj3 = {
//   calc: function (a, b) {},
//   // ES6 Function, get rid of ":" and "function". COOL
//   calc1(a, b) {},
// };

// // 3. Computed property names istead of literally code out
// const propertyNames = ['name1', 'name2', 'nema3', 'name4'];
// const obj4 = {
//   [propertyNames[0]]: 1,
//   [propertyNames[1]]: 2,
//   [`${propertyNames[2]}Whatever`]: 3,
// };
// console.log(obj4);

/* ################################# 
OPTIONAL CHAINING (?.)
####################################*/
// const restaurant = {
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
// // we don't know if a restarant open on monday
// // will get a undefined.open  which is an error
// // console.log(restaurant.openingHours.mon.open);
// // we will have to check
// restaurant.openingHours.fri && console.log(restaurant.openingHours.fri.open);
// // What if openingHours is also optional?
// // Are we going to check both?
// // IN ES2020: OPTIONAL CHAINING: IF a certain property
// // dose not exist, it will return undefine immediately
// // will avoid the undefine.whatever error.
// // ^^^^^^^^^^^
// console.log(restaurant.openingHours?.mon?.open);
// // ? means not undefine or null
// // EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   if (restaurant.openingHours?.[day]) {
//     console.log(`on ${day}, we open at ${restaurant.openingHours[day].open}`);
//   } else {
//     console.log(`on ${day}, we close`);
//   }
// }
// // other way
// for (const day of days) {
//   const openInfo = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${openInfo}`);
// }
// // on thu, we open at 12
// // on fri, we open at 11
// // on sat, we open at 0

/* ################################# 
OPTIONAL CHAINING IN METHODS
####################################*/
// const restaurant = {};
// // console.log(restaurant?.order());  not this way
// console.log(restaurant.order?.() ?? 'Method dose not exist');

/* ################################# 
OPTIONAL CHAINING IN ARRAYS
####################################*/
// const users = [
//   { name: 'Torin', age: 31 },
//   { name: 'Mike', age: 25 },
// ];
// console.log(users[5]?.name ?? 'no such user');

/* ################################# 
LOOPING OBJECTS
####################################*/

// Property NAMES

// const obj = { prop1: '1', prop2: '2', prop3: '3' };
// const properties = Object.keys(obj); // get the propName array
// console.log(properties); // (3) ['prop1', 'prop2', 'prop3']

// // Property VALUES
// const propValues = Object.values(obj);
// console.log(propValues); // (3) ['1', '2', '3']

// // Property KEY+VALUES
// const wholeProperty = Object.entries(obj);
// console.log(wholeProperty);
// // [Array(2), Array(2), Array(2)]

// // Remember how we loop arrays? This is a Review
// // the enteies method of any array
// const arrayTest = [1, 2, 3, 4, 5];
// console.log(arrayTest.entries()); // Array Iterator {}
// for (const index of arrayTest.entries()) {
//   console.log(index);
// } // [0,1],[1,2]....[4,5]
// for (const [i, value] of arrayTest.entries()) {
//   console.log([i, value]);
// } // [0,1],[1,2]....[4,5]
// for (const index of arrayTest) {
//   console.log(index);
// } // 1, 2, 3, 4, 5

// // Loop over the objects
// for (const [key, prop] of Object.entries(obj)) {
//   console.log(key);
// }

/* #################################
CHALLANGE 2
####################################*/
// /* Coding Challenge #2 Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25  Odd of victory Borrussia Dortmund: 6.5 Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this: {   Gnarby: 1,   Hummels: 1,   Lewandowski: 2 }
// GOOD LUCK  */
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
// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [index, value] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${value}`);
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// function calcAverageOdd(obj) {
//   let sum = 0;
//   for (const [, value] of Object.entries(obj.odds)) {
//     sum += value;
//   }
//   console.log(sum / Object.entries(obj.odds).length);
// }
// calcAverageOdd(game);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25  Odd of victory Borrussia Dortmund: 6.5 Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

// function printOdds(obj) {
//   for (const [name, value] of Object.entries(obj.odds)) {
//     if (name !== 'team1' && name !== 'team2') {
//       console.log(`Odd of draw : ${value}`);
//     } else {
//       console.log(`Odd of victory ${obj[name]}: ${value}`);
//     }
//   }
// }
// printOdds(game);

// // 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this: {   Gnarby: 1,   Hummels: 1,   Lewandowski: 2 }
// // scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],

// const scorers = {};
// // let sum = 0;
// // for (const [, name] of game.scored.entries()) {
// //   scorers[name]?;
// // }

// for (const player of game.scored) {
//   console.log(player);
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

/* #################################
SETS
####################################*/
// // 1. Pass in Any ***ITERABLE***
// const anArray = [1, 2, 2, 2, 2];
// const aSet = new Set(anArray);
// const aStringSet = new Set('Torin Zhou');
// console.log(aSet); // Set(2) {1, 2}
// console.log(aStringSet); // Set(9) {'T', 'o', 'r', 'i', 'n', …}  (Strings are iterable)
// /* order of elements in a set is irrelevant. */

// // 2. Size of a set vs Lengh of an array.
// const size = aStringSet.size;

// // 3. Check Existence  set.has();
// const result = aStringSet.has('Z', 'h', 'o', 'u', '');
// console.log(result); //true

// // 4. Add New Element  set.add();
// aSet.add(3);
// aSet.add(3);
// console.log(aSet); // Set(3) {1, 2, 3}

// // 5. Delete Element
// aSet.delete(0); // no error
// aSet.delete(2); // Set(2) {1, 3}
// aSet.clear(); // Delete all
// console.log(aSet); // empty

// // 6. Retrieve Values (note that set has no indexs)
// console.log('There`s no way to get values out of set');
// console.log('If you wanna retrieve, then use Array');

// // 7. Loop over Sets
// for (const whatever of aSet) {
//   console.log(whatever);
// }

// // 8.EXAMPLE: REMOVE DUPLICATE ELEMENTS FROM ARRAY and RETURN A NEW ARRAY
// const arrayWithDuplicateEl = ['Torin', 'Torin', 'Torin', 'Zhou', 'Zhou'];
// const optimizedArray = [...new Set(arrayWithDuplicateEl)];
// console.log(optimizedArray);  // ['Torin', 'Zhou']

/* #################################
MAPS FOUNDAMENTALS
####################################*/
// // 1. Creat an empty map
// const rest = new Map();
// rest.set('keyName', 'value');
// rest.set(1, 'USA');
// rest.set(2, 'RUSSIA'); // .set will automatically return the new map.
// console.log(rest.set(3, 'China')); // Map(4) {'keyName' => 'value', 1 => 'USA', 2 => 'UK', 3 => 'China'}
// rest.set('Categories', ['Good', 'Bad']).set('Answer', 'USA'); // .set chain
// rest.set(true, 'Smart Choice👍').set(false, 'What the fuck?😃');

// // 2. Retrieve data: .get()C
// console.log(rest.get(2)); // RUSSIA
// console.log(rest.get(prompt('Choose a Country') !== 'China')); // usage of boolean keys.

// // 3. Existence .has()
// console.log(rest.has(2)); //true

// // 4. Delete
// rest.delete('Categories');

// // 5. Size
// rest.size; // no()
// console.log(rest.size); // 7

// // 6. Clear
// // rest.clear();

// // 7. Array & Objects KEYS
// rest.set([1, 2], 'Test'); // {Array(2) => 'Test}
// rest.get([1, 2]); // undefine, not the same [1, 2] in the heap. [1,2] != [1,2]
// rest.set(document.querySelector('h1'), 'Heading');

/* #################################
MAPS FOUNDAMENTALS 2
####################################*/
// // 1. Another way to set up a map: array [[],[]] => map
// const question = new Map([
//   ['question', 'Choose Lanugage'],
//   [1, 'C'],
//   [2, 'Python'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 👍'],
//   [false, 'What the fuck? 😃'],
// ]);
// console.log(question);

// // 2. An easy way to conver from obj to map
// const obj = { key1: 1, key2: 2, key3: 3 };
// console.log(Object.entries(obj)); // [Array(2), Array(2), Array(2)]  same constructure as set up a map
// const mapConvert = new Map(Object.entries(obj));

// // 3. Iterate
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }
// const answer = Number(prompt('Your answer?'));
// console.log(question.get(answer === question.get('correct')));

// // 4. Conver Map back to Array: MAP => [[],[]]
// const arr = [...question];
// console.log([...question][0]); // ['question', 'Choose Lanugage']

// // 5. entries, keys , values.
// console.log(question); // same as entries??????
// console.log(question.entries()); // get a strange MapIterator
// console.log(question.keys()); // MapIterator {'question', 1, 2, 3, 'correct', …}
// console.log(question.values()); // have to spread it
// console.log(...question.keys()); // question 1 2 3 correct true false

/* #################################
CHOOSE DATA STRUCTURE
####################################*/
// 1.  Array or Sets for simple list
// 2.  Objects OR Maps for KEY/VALUE
// # BUTIL-IN
//  - Object
//  - Map
//  - Array
//  - Set
//  - WeakMap
//  - WeakSet
// # NON-BUILT IN
//  - Stacks
//  - queueS
//  - Linket lists
//  - Trees
//  - Hash Tables
// 3. Maps vs obj
/* MAP : EASY TO ITERATE
EASY TO COMPUTE SIZE
ANY TYPES OF KET*/

/* #################################
CHALLANGE
####################################*/
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// const arrAssistence = [];
// for (const [, value] of gameEvents) {
//   arrAssistence.push(value);
// }
// const arr = [...new Set(arrAssistence)];
// console.log(arr);

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// // 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: Goal
// for (const [time, issue] of gameEvents) {
//   const prefix = time <= 45 ? 'First' : 'Second';
//   console.log(`${prefix} ${time}: ${issue}`);
// }

/* #################################
STRINGS
####################################*/
// 1. JUST LIKE AN ARRAY
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]); // A
console.log(plane[1]); // '3'
console.log(airline.length); // 16

// 2. METHODS
// 2.1 IndexOf
console.log(airline.indexOf('r')); // 6.    indexOf
console.log(airline.lastIndexOf('r')); // 10      lastIndexof
console.log(airline.indexOf('Air')); // 4
// 2.2 slice (Creat a sub string, the original won't change, Thay are primitives)
console.log(airline.slice(4, 7)); // Air
console.log(airline.slice(1, -1)); // AP Air Portuga
console.log(airline.slice(4)); // Air Portugal
console.log(airline); // TAP Air Portugal ,
console.log(airline.slice(0, airline.indexOf(' '))); //Tap
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal;

// 2.3 check middle seat
const checkMiddleSeat = function (seat) {
  // B and E: middle seats11B
  const checker = seat.slice(-1);
  if (checker === 'B' || checker === 'E' || checker === 'b' || checker === 'e')
    return true;
  else return false;
};
console.log(checkMiddleSeat(prompt('type in seat')));

// 2.4
// behinde the scene
console.log(new String('11B').slice(-1)); // B

// 2.5 Case transform
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log(airline.toLocaleLowerCase()); // ?

// 2.6 Trim
const badEmail = '   torinZhou@GMAIL.COM  \n';
const goodEmail = badEmail.toLowerCase().trim();
console.log(goodEmail); // torinzhou.gmail.com
1;
// Since ES2019
// '  ddd  '.trimLeft();
// '  ddd  '.trimRight();
// '  ddd  '.trimStart();
// '  ddd  '.trimEnd();

// 2.7 Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcement =
  'All passengers come to bording door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// replace the first 'door', replaceAll is now included in MDN documentation and the ECMA-262 (2021) spec, but replaceAll still isn't widely available in all browsers.
// now use regular expression instead
console.log(announcement.replace(/door/g, 'gate'));
// /door/g, g stands for globle.

// 2.8 Bolleans: includes(), startsWith(), endsWith()
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320')); //true
console.log(plane2.startsWith('Air')); //true
console.log(plane2.endsWith('neo')); //true

// 2.9 str.split() str.join()
const str = 'a+very+nice+string';
console.log(str.split('+')); // (4) ['a', 'very', 'nice', 'string']
const [firstName, lastName] = 'Torin Zhou'.split(' ');
console.log(firstName);
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// 2.10 Padding a String
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+')); // ++++++Go to gate 23!
console.log(message.padEnd(20, '+')); // Go to gate 23!++++++

// mask credit card function
const maskCreditCard = function (number) {
  const str = number + ''; // add an empty string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(4581230118540949));
maskCreditCard('4581230118540949');
