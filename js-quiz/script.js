let myValue = 30;

for (let i = 5; i < 9; i++) {
	myValue += 2;
}

console.log("q1:", myValue);

const arr = Array(100).fill(0);
console.log(arr);

const firstName = "Remi";
const lastName = "Hoeppe";

const fullName = (lastName) => {
	return firstName + " " + lastName;
};

console.log(fullName("Boswell"));

const reverseIncrement = (arr = [], inc = 1) => {
	const increment =
		(inc = 1) =>
		(n) =>
			n + inc;
	return arr.slice().reverse().map(increment(inc));
};

console.log(reverseIncrement([1, 2, 3, 4, 5], 2));
console.log(reverseIncrement([5, 4, 3, 2, 1], 6));

rever = [1, 2, 3, 4, 5].reverse();
console.log(rever);

const arr3 = [1, 2, 3, 4, 5].map((item) => item + 1);
console.log([1, 2, 3, 4, 5].map((item) => item + 2).reverse());

console.log(7 == "7");

if (8 && 7 === "7") {
	console.log("bacon");
} else if (7 === "7" || 8) {
	console.log("lettuce");
} else {
	console.log("tomato");
}

const source = [1, 2, 3, 4, 5];
const destination = source.map((item) => item + 1);

console.log(destination);

const destination1 = source.filter((item) => item % 3 === 0);

console.log(destination1);

const destination2 = source.reduce((acc, curr) => {
	const current = curr + 3;
	if (current % 2 === 0) {
		acc.push(current);
	}
	return acc;
}, []);

console.log(destination2);

const destination3 = source.filter((item) => {
	if ((item + 3) % 2 === 0) {
		return item + 3;
	}
});
console.log(destination3);

const source1 = "Convert to snakecase".split("");
let str = source1.reduce((acc, curr) => {
	if (curr === " ") {
		acc += "_";
	} else {
		acc += curr.toLowerCase();
	}
	return acc;
}, "");

console.log(str);

console.log(("ba" + +"a" + "a").toLowerCase());

// const arr5 = new Array(2).fill(null);
// console.log(`Aspi${arr.pop() ?? "ra"}tions`);

// console.log(arr5);

// console.log(arr5.pop() ?? "ra");

// const person = { name: "Allen" };
// console.log(`${"" + person.age.slice(4, 6)}`);
const chars = [74, 97, 118, 97, 83, 99, 114, 105, 112, 116];
let i = 0;
let output = "";

while (i++ <= chars.length) {
	output += String.fromCharCode(chars[i]);
}

console.log(output);

const suits = [1, 2, 3, 4];

const drawCards = (n = 10) => {
	const cards = [];
	while (cards.length < n) {
		console.log("n", n);
		let card = Math.floor(Math.random() * 13) + 1;
		card += suits[Math.floor(Math.random() * 4)];
		if (cards.includes(card)) continue;
		cards.push(card);
	}
	return cards;
};

console.log(drawCards(5));
console.log(drawCards(55));
console.log(drawCards(21));
