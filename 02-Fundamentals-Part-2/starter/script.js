// this has to be at the very beginning
`use strict`;


//chalange 1
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
    
    
//chalange 1
const calctip = function (bill) {
  const tip = (bill >= 50 && bill <= 300) ? 
  0.15 * bill : 0.2 * bill;
  return tip;
}

const bills = [125, 555, 44];
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);