// Exporting module
console.log('Exporting module');
// console.log('Staring fetching users');
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log('Finish fetching');
const shippingCost = 10;
const cart = [];
// variables are scoped to this module.
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}`);
};
// named export
const totalPrice = 111;
const totalQuantity = 100;
export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}`);
}
