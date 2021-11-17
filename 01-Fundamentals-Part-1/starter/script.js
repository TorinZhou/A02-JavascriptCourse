// CHALLENGE 1 
// Store mass and height
const marksWeight = 78,
marksHeight = 1.69,
johnsWeight = 92,
johnsHeight = 1.95;
// Calculat BMI
let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight / johnsHeight ** 2;
// mark higher BMI
let markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);

if(markHigherBMI) {
  console.log(`Mark's BMI ${marksBMI} is higher than John's ${johnsBMI}`)
} else {  
  console.log(`John's BMI ${johnsBMI} is higher than Mark's ${marksBMI}`)
}