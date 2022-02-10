// // CHALLENGE 1
// // Store mass and height
// const marksWeight = 78,
//   marksHeight = 1.69,
//   johnsWeight = 92,
//   johnsHeight = 1.95;
// // Calculat BMI
// let marksBMI = marksWeight / marksHeight ** 2;
// let johnsBMI = johnsWeight / johnsHeight ** 2;
// // mark higher BMI
// let markHigherBMI = marksBMI > johnsBMI;
// console.log(markHigherBMI);

// if (markHigherBMI) {
//   console.log(`Mark's BMI ${marksBMI} is higher than John's ${johnsBMI}`);
// } else {
//   console.log(`John's BMI ${johnsBMI} is higher than Mark's ${marksBMI}`);
// }

// // CHALLENGE 3
// const scoreDolphins1 = 97;
// const scoreDolphins2 = 112;
// const scoreDolphins3 = 101;
// const scoreKoalas1 = 109;
// const scoreKoalas2 = 95;
// const scoreKoalas3 = 106;
// const averageDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
// const averageKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
// if (
//   averageDolphins > averageKoalas &&
//   (scoreDolphins3 > 100 || scoreDolphins2 > 100 || scoreDolphins1 > 100)
// ) {
//   console.log(`Dolphins Win.`);
// } else if (
//   averageKoalas > averageDolphins &&
//   (scoreKoalas3 > 100 || scoreKoalas2 > 100 || scoreKoalas1 > 100)
// ) {
//   console.log(`Koalas Win.`);
// } else if (
//   averageKoalas === averageDolphins &&
//   (scoreDolphins3 > 100 || scoreDolphins2 > 100 || scoreDolphins1 > 100) &&
//   (scoreKoalas3 > 100 || scoreKoalas2 > 100 || scoreKoalas1 > 100)
// ) {
//   console.log(`it's a tie`);
// } else {
//   console.log(`No one Win.`);
// }

// // CHALLENGE 4
// let tip;
// const bill = 40;
// tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`
// );

// const num = 8273773.44;
// const options = {
//   style: "unit",
//   unit: "mile-pre-hour",
// };
// console.log(new Intl.NumberFormat(`zh-CN`, options).format(num));
// console.log(new Intl.NumberFormat(`en-US`, options).format(num));
// console.log(new Intl.NumberFormat(`de-DE`, options).format(num));
// console.log(new Intl.NumberFormat(`en-UK`, options).format(num));
// console.log(new Intl.NumberFormat(`ru-RU`, options).format(num));
// console.log(new Intl.NumberFormat(navigator.language).format(num));
// console.log(navigator.language);
// console.log(navigator.languages);
var x = 1;
function foo(y) {
  return function (z) {
    return x + y + z;
  };
}

var f = foo(2);

console.dir(f);
