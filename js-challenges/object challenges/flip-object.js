// Swap keys with values

const translate = {
	apple: "jablko",
	pear: "gruszka",
	strawberry: "truskawka",
};

/* const newObj = {
    jablko: "apple",
    gruszka: "pear",
    truskawka: "strawberry"
} */

const translateObj = (obj) => {
	swappedArr = Object.entries(obj).map(([key, value]) => [value, key]);
	return Object.fromEntries(swappedArr);
};
console.log(translateObj(translate));
