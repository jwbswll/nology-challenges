// CHALLENGE 1
const moonOrbits = (earthDays) => {
  return (earthDays / 27.3).toFixed(2);
}
console.log(moonOrbits(54));
console.log(moonOrbits(365));


// CHALLENGE 2
const circleArea = (radius) => {
  return (Math.PI * (radius**2)).toFixed(2);
}
console.log(circleArea(10));

const circlePerim = (radius) => {
  return (2 * Math.PI * radius).toFixed(2);
}
console.log(circlePerim(10));


// CHALLENGE 3
const ageInDays = (age) => {
  return age * 365;
}
console.log(ageInDays(27));

const ageInSeconds = (age) => {
  return age * 31536000;
}
console.log(ageInSeconds(27));


// CHALLENGE 4
const remainder = (numerator, denominator) => {
  return numerator % denominator;
}
console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));


// CHALLENGE 5
const basketballScore = (twoPointers, threePointers) => {
  let twoPointersScore = twoPointers * 2;
  let threePointersScore = threePointers * 3;
  return twoPointersScore + threePointersScore;
}
console.log(basketballScore(10, 9));


// CHALLENGE 6
const lessThan100 = (num1, num2) => {
  let result = num1 + num2;
  if (result < 100) {
    return true;
  } else {
    return false;
  }
}
console.log(lessThan100(50, 51));
console.log(lessThan100(28, 51));
console.log(lessThan100(70, 51));
console.log(lessThan100(50, 20));