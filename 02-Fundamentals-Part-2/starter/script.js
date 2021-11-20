// this has to be at the very beginning
`use strict`;
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

// let calcAverage = function (score1, score2, score3) {
//   age = (score1 + score2 + score3)/3;
//   return age;
// };
// let calcAverage = function (score1, score2, score3) {
//   return (score1 + score2 + score3)/3;
// };

// alert(calcAverage(1, 1, 9));

const checkWinner = function(dolphinScore1, dolphinScore2, dolphinScore3, koalaScore1, koalaScore2, koalaScore3) {
  const avgDolphins = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);
  const avgKoalas = calcAverage(koalaScore1, koalaScore2, koalaScore3);
  const winner = (avgDolphins >= 2 * avgKoalas) ? 
  `winner is Dolpins and vitory poins is ${avgDolphins}` 
  : (avgKoalas >= 2 * avgDolphins) ? 
  `winner is Koalas and the vitory point is ${avgKoalas}` 
  : "nobody win" ; 
  console.log(winner);
} 



checkWinner(44,  111, 199, 65, 999, 49);