// A function that calculates the sum of numbers

// It should throw an error if one or more parameters are not a number

// if no parameters are passed -> thor an error

// I want it to sum any number of arguments <= 1

export const sum = (...numbers) => {
	if (numbers.length < 1) {
		throw new Error("Function needs one or more arguments");
	}

	if (!numbers.every((num) => typeof num === typeof 1)) {
		throw new Error("All inputs should be numbers");
	}

	let sumTotal = numbers.reduce((acc, curr) => (acc += curr));
	return sumTotal;
};
