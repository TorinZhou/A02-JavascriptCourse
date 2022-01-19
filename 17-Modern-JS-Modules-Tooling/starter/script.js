// Importing module
// All modules are executed in strict mode
// And hoisted
// import './shoppingCart.js';
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('Something'); //

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastPost = getLastPost();
// console.log(lastPost);
// // Not very clean
// lastPost.then(last => console.log(last));
// // Top Level await
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// Creat new scopt and return data at once.
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 111;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product}`);
//   };
//   const orderStack = function (product, quantity) {
//     console.log(`Order ${quantity} ${product}`);
//   };
//   return {
//     addToCart,
//     // cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();
// ShoppingCart2.addToCart('apple', 5);
// console.log(ShoppingCart2);
console.log('Importing module');
import add from './shoppingCart.js';
import cloneDeep from 'lodash-es';
import 'core-js/stable';
add('pizza', 2);
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
// ES Clone vs lodash DeepClone
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
// a little change
state.user.loggedIn = false;
console.log(stateClone);
// get two false.
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
