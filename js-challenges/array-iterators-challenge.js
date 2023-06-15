// You have an array of names all in lowercase you want a new array with all names but uppercase

const names = ["JOHN", "james", "jeremy", "jack"];

const namesUppercase = names.map((name) => name.toUpperCase());

console.log(namesUppercase);

// You have an array of numbers, you want a new array with each number decremented by 5

numsArr = [10, 60, 23, 56, 79, 5, 2];

const numsDecrementedBy5 = numsArr.map((num) => num - 5);

console.log(numsDecrementedBy5);