const age = document.querySelector("#age");
console.log(age.value);
const country = document.querySelector("#country");
console.log(country.value);
const drunkLevel = document.querySelector("#drunk");
console.log(drunkLevel.value);
const btn = document.querySelector("#btn");

const message = document.querySelector("#message");

const canYouEnter = (number1, text, number2) => {
	if (country.value == "USA") {
		if (parseInt(age.value) >= 21 && parseInt(drunkLevel.value) <= 3) {
			message.classList.remove("message--failure");
			message.innerText = "Come in and have a beer";
			document.querySelector("#beerImg").src = "./assets/green_beer.svg";
			message.classList.add("message--success");
		} else {
			message.classList.remove("message--success");
			message.innerText = "You can't have a beer";
			document.querySelector("#beerImg").src = "./assets/red_beer.svg";
			message.classList.add("message--failure");
		}
	} else {
		if (parseInt(age.value) >= 18 && parseInt(drunkLevel.value) <= 3) {
			message.classList.remove("message--failure");
			message.innerText = "Come in and have a beer";
			document.querySelector("#beerImg").src = "./assets/green_beer.svg";
			message.classList.add("message--success");
		} else {
			message.classList.remove("message--success");
			message.innerText = "You can't have a beer";
			document.querySelector("#beerImg").src = "./assets/red_beer.svg";
			message.classList.add("message--failure");
		}
	}
};

btn.addEventListener("click", (event) => {
	event.preventDefault();
	canYouEnter(age, country, drunkLevel);
});
