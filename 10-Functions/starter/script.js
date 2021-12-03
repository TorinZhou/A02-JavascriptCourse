'use strict';

/* #################################
Defalut parameters
####################################*/

const creatBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers * 200
) {
  // ES5 way of default parameters
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const bookingObj = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(bookingObj); // {flightNum: 'whatever', numPassengers: 1, price: 200}
};
creatBooking('whatever', undefined, undefined);
