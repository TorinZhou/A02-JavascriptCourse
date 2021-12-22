'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelLogo = document.querySelector('.logo');
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
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / 1000 / 60 / 60 / 24);
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days age`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: `currency`,
    currency: currency,
  }).format(value);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(acc.balance, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};
/* #################################
logout timer
####################################*/
const startLogOutTimer = function () {
  let time = 11;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Login Please
      `;
      containerApp.style.opacity = 0;
    }
    time--;
  };
  tick();
  timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
// FAKE ALWAYS LOGGED IN
let currentAccount, timer;

// day/month/year
containerApp.addEventListener('click', () => {
  clearInterval(timer);
  startLogOutTimer();
});

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      // weekday: 'long',
    };
    const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    if (timer) clearInterval(timer);
    startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // add transfer date
    currentAccount.movementsDates.push(new Date());
    receiverAcc.movementsDates.push(new Date());
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
      inputLoanAmount.value = '';
    }, 2500);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0); //true

// // Base 10 ~ 0 to 9.   1/10 = 0.1  3/10 = 3.33333
// // Binary base 2 ~ 0 1
// console.log(0.1 + 0.2); // 0.3000000000004
// console.log(0.1 + 0.2 === 0.3); // false

// // Type coercion
// console.log(+`23`);
// console.log(Number(`23`));

// // Number.parseInt()  Number.parseFloat()
// console.log(Number.parseInt(`30px`, 10)); // 30rem => 30
// console.log(Number.parseInt(`1Fpx`, 16)); // 31 ????
// console.log(Number.parseInt(`17px`, 8)); // 15 ???
// console.log(Number.parseInt(`11px`, 2)); // 7
// console.log(Number.parseInt(`px30`, 10)); // NaN
// console.log(Number.parseInt(`   2.5rem`)); // 2 (blocks won't count)
// console.log(Number.parseFloat(`    2.5rem`)); // 2.5

// // Number.isNaN()  (true: number && NaN)   (false:else)
// // Check if value is NaN (really NaN)
// console.log(20 / 0); // Infinity
// console.log(0 / 0); // NaN
// console.log(+`23whatever`); // NaN

// console.log(typeof (20 / 0)); // number Infinity
// console.log(typeof (0 / 0)); // number NaN
// console.log(typeof NaN); // number
// console.log(typeof +`23whatever`); // number

// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN(20 / 0)); // false number but not a NaN
// console.log(Number.isNaN(0 / 0)); // true
// console.log(Number.isNaN(NaN)); // true

// // Number.isFinite()  Best way to check if a value is a number.
// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite(`20`)); // false
// console.log(Number.isFinite(+`20`)); // true
// console.log(Number.isFinite(23 / 0)); // false

// // Number.isInteger()  check Interger
// console.log(Number.isInteger(23)); // true
// console.log(Number.isInteger(23.0)); // true
// console.log(Number.isInteger(23 / 0)); // false

// // square root
// console.log(Math.sqrt(25)); // 5
// console.log(25 ** (1 / 2)); // 5
// console.log(8 ** (1 / 3)); // 2

// console.log(Math.max(5, 18, `23`, 11, 2)); // 23
// console.log(Math.max(5, 18, `23px`, 11, 2)); // NaN
// console.log(Math.min(1, 2, 3, 4));

// console.log(Math.PI * Number.parseFloat(`10px`) ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1); // 1~6

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(1, 5));

// // Roundiung Integers

// Math.trunc(-22.9); // -22
// Math.floor(-22.9); // -23
// Math.ceil(22.2);
// Math.round(22.3);

// // Rounding decimals
// (2.7).toFixed(3); //  return a string 2.700

// // remineder (you do somethin every Nth time)
// console.log('--------------Remainder-------------');
// console.log(5 % 2); // 5 = 2 * 2 + 1
// const isEven = n => n % 2 === 0; // check even
// const isEven2 = (n, d) => n % d === 0;

// labelBalance.addEventListener('click', function () {
//   const arr = document.querySelectorAll('.movements__row');
//   console.log(arr); //  NodeList(8)
//   console.log(...arr);
//   console.log([...arr]); // convert NodeList(8)  to real Array(8)
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'cyan';
//   });
// });

// // ES2021 NUMERIC SPARATOR
// const diameter = 287_460_000_000; // 287,460,000,000
// const priceInCents = 345_99; // 345.99 $ = 34599 cents
// const transferFee1 = 15_00;
// const transferFee2 = 1_500; // two same number
// console.log(Number('23_000')); // NaN
// console.log(parseInt('23_000')); // 230

// // es2020 bigint
// console.log(2 ** 53 - 1);
// console.log(2 ** 53 + 100);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(467373838383838383838473877777773333333);
// // 4.673738383838384e+38
// console.log(467373838383838383838473877777773333333n);
// // 467373838383838383838473877777773333333n
// console.log(BigInt(467373838383838383838473877777773333333));
// // 467373838383838377927141645154082881536n;

// console.log(12345n ** 9n);
// // 6659166111488656281486807152009765625n
// // notice that we cannot mix BigInt and other type.
// // like 12345n ** 9 => error

// // dates and time
// const now = new Date();
// console.log(now); // Tue Dec 21 2021 03:39:28 GMT+0800 (中国标准时间)

// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2077, 0, 35));
// // Thu Feb 04 2077 00:00:00 GMT+0800 (中国标准时间)
// console.log(new Date(0));
// // Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear()); // 2037
// console.log(future.getMonth()); // 10 : Nov
// console.log(future.getDate()); // 19
// console.log(future.getDay()); // 4 : Thusday
// console.log(future.getHours()); // 4 : Thusday
// console.log(future.getMinutes()); //
// console.log(future.getSeconds()); //
// console.log(future.getSeconds()); //
// console.log(future.toISOString()); // 2037-11-19T07:23:00.000Z
// console.log(future.getTime());
// // 2142228180000  milisecond after unix 0
// console.log(new Date(2142228180000));
// // future
// console.log(Date.now()); // 1640030844753 now
// future.setFullYear(2040); //
// ----------------------------
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future); // convert to time stamp in miliseconds

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
// console.log(days1); // 10 days

setTimeout(() => console.log('Here is your pizza'), 3000);
console.log('This lines showing up means Asynchronous JS');

// how can we pass arguments? cause we did't call the callback function
// here the solution
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} `),
  3000,
  'olives',
  'spinach'
);
// how to cancel the timeout 😊
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  5000,
  ...ingredients
);
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// set interval
// setInterval(function () {
//   const now = new Date();
//   const hour = now.getHours();
//   const min = now.getMinutes();
//   const sec = now.getSeconds();
//   console.log(`${hour}:${min}:${sec}`);
// }, 1000);

const testFn = () => console.log('111');
const test2 = testFn();
console.log(test2);
