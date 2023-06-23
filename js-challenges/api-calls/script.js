const COUNTRIES_URL = "https://restcountries.com/v3.1/name/";

async function fetchCountry(countryName) {
	const response = await fetch(`${COUNTRIES_URL}${countryName}?fullText=true`);
	const info = await response.json();

	const cleanedData = info.map((i) => {
		const { population, languages, area, capital, continents } = i;
		const languageStr = Object.values(languages).join(", ");
		const continentsStr = continents.join(", ");
		const areaStr = `${area}km2`;
		const capitalStr = capital.join(", ");
		return { population, languageStr, continentsStr, capitalStr, areaStr };
	});
	return cleanedData;
}

console.log(fetchCountry("spain"));

countryInput = document.querySelector("#countryInput");

console.log();

const countryForm = document.querySelector("#countryForm");

countryForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const countryData = await fetchCountry(countryInput.value);
	console.log(countryData);
	const [{ population, languageStr, continentsStr, capitalStr, areaStr }] =
		countryData;
	const outputList = document.querySelector("#outputList");
	outputList.innerHTML = "";
	const populationLi = document.createElement("li");

	populationLi.appendChild(
		document.createTextNode(`Population: ${population};  `)
	);
	const languagesLi = document.createElement("li");

	languagesLi.appendChild(
		document.createTextNode(`Languages: ${languageStr}; `)
	);
	const continentsLi = document.createElement("li");

	continentsLi.appendChild(
		document.createTextNode(`Continent(s): ${continentsStr}; `)
	);
	const capitalLi = document.createElement("li");

	capitalLi.appendChild(
		document.createTextNode(`Capital City: ${capitalStr}; `)
	);
	const areaLi = document.createElement("li");

	areaLi.appendChild(document.createTextNode(`Area: ${areaStr}; `));
	console.log(population);
	outputList.appendChild(populationLi);
	outputList.appendChild(languagesLi);
	outputList.appendChild(continentsLi);
	outputList.appendChild(capitalLi);
	outputList.appendChild(areaLi);
	console.log(outputList);
	const liEls = document.querySelectorAll("li");
	liEls.forEach((li) => {
		li.style.display = "block";
	});
});
