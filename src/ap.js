function updateWeatherInfo(response) {
    
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity (city){
    let apiKey = "a34t41e6f3486dfcf9dba23606b154co";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(updateWeatherInfo);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let inputElement = document.querySelector("#form__input");
    
    
    searchCity(inputElement.value);
}

const form = document.querySelector("#form");
form.addEventListener("submit", handleSearchSubmit);

searchCity("kyiv");