let x = 3;
let y = 4;

if (x > y) {
  console.log("x is greater than y")
} else if (x < y) {
  console.log("x is smaller than y")
} else {
  console.log("x is equal to y")
}

let userInput = 'hello'

if (parseInt(userInput)) {
  console.log(userInput**2)
} else if (typeof userInput == typeof "hello") {
  console.log(userInput)
} else {
  console.log("Invalid Input")
}
