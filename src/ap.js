function enterCity(event) {
event.preventDefault();
const inputElemnt = document.querySelector("#form__input");
const cityElement = document.querySelector("#city");
cityElement.innerHTML = inputElemnt.value;
};

const form = document.querySelector("#form");
form.addEventListener("submit", enterCity);