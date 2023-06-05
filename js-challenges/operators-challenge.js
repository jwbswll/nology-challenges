// Challenge 1

let myAge = 27

myAge += 10
console.log(myAge)

myAge -= 7
console.log(myAge)

myAge *= 11
console.log(myAge)

// Challenge 2

let earthDays = 365
const moonRotationDays = 27.3

console.log(Math.floor(earthDays / moonRotationDays))
console.log(Math.ceil(earthDays / moonRotationDays))

// Challenge 3

earthDays = 730
const moonOrbitDays = moonRotationDays

console.log(Math.round(earthDays / moonOrbitDays))
console.log((earthDays / moonOrbitDays).toFixed(2))