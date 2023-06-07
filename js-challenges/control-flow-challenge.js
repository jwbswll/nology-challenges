// challenge 1
let x = 3;
let y = 4;

if (x > y) {
  console.log("x is greater than y")
} else if (x < y) {
  console.log("x is smaller than y")
} else {
  console.log("x is equal to y")
}


// challenge 2
let userInput = 2

if (parseInt(userInput)) {
  console.log(userInput**2)
} else if (typeof userInput == typeof "hello") {
  console.log(userInput)
} else {
  console.log("Invalid Input")
}


// challenge 3
let dayNumber = 8

switch(dayNumber) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3: 
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5: 
    console.log("Today is Friday");
    break;
  case 6: 
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Input is invalid");
}


// challenge 4
let parent1 = "brown";
let parent2 = "green";
let blue = 0;
let brown = 0;
let green = 0;

if (parent1 === "blue" && parent2 === "blue") {
  blue = 99;
  brown = 0;
  green = 1;
} else if (parent1 === "brown" && parent2 === "brown") {
  blue = 6.25;
  brown = 75;
  green = 18.75;
} else if (parent1 === "green" && parent2 === "brown" || parent1 === "brown" && parent2 === "green") {
  blue = 12.5;
  brown = 50;
  green = 37.5;
} else if (parent1 === "blue" && parent2 === "brown" || parent1 === "brown" && parent2 === "blue") {
  blue = 50;
  brown = 50;
  green = 0;
} else if (parent1 === "green" && parent2 === "green") {
  blue = 25;
  brown = 1;
  green = 75;
} else if (parent1 === "green" && parent2 === "blue" || parent1 === "blue" && parent2 === "green") {
  blue = 50;
  brown = 0;
  green = 50;
}

console.log(`Your eye colors are ${parent1} and ${parent2}, the chances of your child having blue eyes is ${blue}%, brown is ${brown}% and green is ${green}%.`)


//challenge 4 - bonus
let childEyeColor = ''

if ((blue > green) && (blue > brown)) {
  childEyeColor = "blue"
} else if ((green > blue) && (green > brown)) {
  childEyeColor = "green"
} else if ((brown > blue) && (brown > green)) {
  childEyeColor = "brown"
} else if (blue == green || blue == brown) {
  childEyeColor = "blue"
} else if (brown == green)
  childEyeColor= "brown"

switch(childEyeColor) {
  case "blue":
    console.log("Your child has my favourite eye color: Blue");
    break;
  case "green":
    console.log("Your child has my least favourite eye color: Green");
    break;
  case "brown":
    console.log("Your child has my second favourite eye color: Brown");
    break;
}