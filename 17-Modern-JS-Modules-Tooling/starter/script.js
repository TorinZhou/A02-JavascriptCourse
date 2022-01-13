// Importing module
// All modules are executed in strict mode
// And hoisted
// import './shoppingCart.js';
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
console.log('Importing module');
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
import add from './shoppingCart.js';
// add('pizza', 2);

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
