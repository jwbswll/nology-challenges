const age = document.querySelector("#age");
const country = document.querySelector("#country");
const drunkLevel = document.querySelector("#drunk");
const btn = document.querySelector("#btn");
const BeerInputs = document.querySelectorAll("input");
console.log(BeerInputs);
const message = document.querySelector("#message");

const canYouEnter = (number1, text, number2) => {
	if (
		(country.value == "USA" &&
			parseInt(age.value) >= 21 &&
			parseInt(drunkLevel.value) <= 3) ||
		(country.value !== "USA" &&
			parseInt(age.value) >= 18 &&
			parseInt(drunkLevel.value) <= 3)
	) {
		message.classList.remove("message--failure");
		message.innerHTML = "<p>Come in and have a beer</p>";
		document.querySelector("#beerImg").src = "./assets/green_beer.svg";
		message.classList.add("message--success");
	} else {
		message.classList.remove("message--success");
		message.innerHTML = "<p>You can't have a beer</p>";
		document.querySelector("#beerImg").src = "./assets/red_beer.svg";
		message.classList.add("message--failure");
	}
};

btn.addEventListener("click", (event) => {
	event.preventDefault();
	canYouEnter(age, country, drunkLevel);
	age.value = "";
	country.value = "";
	drunkLevel.value = "";
});
