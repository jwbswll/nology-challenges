// given an array of character codes, convert the codes to letters and reduce it to a single string
const arrOfCodes = [114, 101, 100, 117, 99, 101];

const strFromCodes = arrOfCodes.reduce((acc, curr) => {
	return acc + String.fromCharCode(curr);
}, "");

console.log("string from character codes:", strFromCodes);

// given an array of letters, reduce them to get the sum of character codes
const lettArr = ["c", "h", "e", "e", "s", "e"];

const sumOfCharCodes = lettArr.reduce((acc, curr) => {
	return acc + curr.charCodeAt();
}, 0);

console.log("sum of character codes:", sumOfCharCodes);

// use reduce to filter an array to only get numbers greater than 10
const numsArr = [1, 345, 545, 2, 5, 7, 907];

const greaterThan10 = numsArr.reduce((acc, curr) => {
	if (curr > 10) {
		acc.push(curr);
	}
	return acc;
}, []);

console.log("numbers greater than 10:", greaterThan10);

// use reduce to create an array of numbers (use numsArr) to the power of 2
const numsArrPower2 = numsArr.reduce((acc, curr) => {
	acc.push(curr ** 2);
	return acc;
}, []);

console.log("numbers squared:", numsArrPower2);
