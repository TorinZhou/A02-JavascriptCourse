'use strict';
const test = {
  first: 1990,
  second: 2021,
  calcDuration: function () {
    this.second - this.first;
    console.log(this);
  },
};

const wired = {
  year: 2077,
};
wired.calcDuration = test.calcDuration;
test.calcDuration();
console.log(test, wired);

wired.calcDuration();
// this keyword always point to the object which calling the method.

const test2 = test.calcDuration;

test2();
// in this case an error, test2 is just a regular function, not an object, this is undefined. this.year is undefined as well.
