// this has to be at the very beginning
`use strict`;

// //chalange 1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

// let calcAverage = function (score1, score2, score3) {
//   age = (score1 + score2 + score3)/3;
//   return age;
// };
// let calcAverage = function (score1, score2, score3) {
//   return (score1 + score2 + score3)/3;
// };

// alert(calcAverage(1, 1, 9));

// const checkWinner = function(dolphinScore1, dolphinScore2, dolphinScore3, koalaScore1, koalaScore2, koalaScore3) {
//   const avgDolphins = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);
//   const avgKoalas = calcAverage(koalaScore1, koalaScore2, koalaScore3);
//   const winner = (avgDolphins >= 2 * avgKoalas) ?
//   `winner is Dolpins and vitory poins is ${avgDolphins}`
//   : (avgKoalas >= 2 * avgDolphins) ?
//   `winner is Koalas and the vitory point is ${avgKoalas}`
//   : "nobody win" ;
//   console.log(winner);
// }

// //chalange 1
// const calctip = function (bill) {
//   const tip = (bill >= 50 && bill <= 300) ?
//   0.15 * bill : 0.2 * bill;
//   return tip;
// }

// const bills = [125, 555, 44];
// const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];

// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

//object small challange
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(`${jonas.firstName} has ${jonas.friends.length} fiends, and his best friend is ${jonas.friends[0]}.`)

//object small challange 2
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
// }
// Output "Jonas is a 46-year old teacher, and he has a/no driver license "
// I will write a method to output info.

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   calcAge: function() {return 2037 - this.birthYeah;},
//   // calcAge: () => 2037 - this.birthYeah,
//   getInfo: function(){return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no' } driver license.`;},
//   // getInfoString: `${jonas.firstName}`,
// }
// console.log(jonas.getInfo());
// // It's jonas that calling getinfo, so this = jonas
// console.log(jonas.job);

// const aPerson = {
//   firstName : 'Michael',
//   lastName : 'Jordan',
//   getName : function(){return `${this.firstName} ${this.lastName}`;},
//   getName2 :`${this.firstName} ${this.whatever} ${aPerson.lastName} `,
// }
// console.log(aPerson.getName());
// console.log(aPerson.getName2);

// const mark = {
//   fullName : `Mark Miller`,
//   mass: 78,
//   height: 1.69,
//   calcBMI: function(){return this.mass / this.height ** 2;},
// }
// const john = {
//   fullName : `Torin Zhou`,
//   mass : 92,
//   height: 1.95,
//   calcBMI: function(){return this.mass / this.height ** 2;},
// }

// console.log(mark.calcBMI());
// const compareBMI = function(name1,name2){
//   const message = (name1.calcBMI() > name2.calcBMI()) ?
//   `${name1.fullName}'s BMI (${name1.calcBMI()}) is higher than ${name2.fullName}'s (${name2.calcBMI()})`:
//   (name2.calcBMI() > name1.calcBMI()) ?
//   `${name2.fullName}'s BMI (${name2.calcBMI()}) is higher than ${name1.fullName}'s (${name1.calcBMI()})`:
//   `They have the same BMI`;
//   return console.log(message);
// }
// compareBMI(mark,john);

// challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calctip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
  return tip;
};
for (i = 0; i < bills.length; i++) {
  tips.push(calctip(bills[i]));
  totals.push(bills[i] + calctip(bills[i]));
}
const calcAverage = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(totals);
console.log(calcAverage(totals));
// calc the element average of a given array.
