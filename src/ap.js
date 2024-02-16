function updateWeatherInfo(response) {
    
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let weatherDescription = document.querySelector("#weather-dscription");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let timeElement = document.querySelector("#time");
    let icon = document.querySelector("#icon");

    let date = new Date(response.data.time * 1000);
    let temperature = response.data.temperature.current;

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    weatherDescription.innerHTML = response.data.condition.description;
    humidity.innerHTML = `${response.data.temperature.humidity}%`;
    wind.innerHTML = `${response.data.wind.speed}km/h`;
    timeElement.innerHTML = formatDate(date);
    icon.innerHTML = `<img src="${response.data.condition.icon_url}" class = "weather-app-icon"/>`;
}

function formatDate (date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
        "Sunday",
        "Monday",
        "Thuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "saturday",  
    ]
    let day = days[date.getDay()];

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
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

function showForecast () {
    let days = ["Fri", "Sat", "San", "Mon", "Tue"];
    let forecastHtml = "";

    days.forEach(function(day) {
        forecastHtml =     
        forecastHtml +
        `
                <div class="weather-forecast-day">
                    <div class="weather-forecast-date">${day}</div>
                    <img 
                        src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" 
                        alt="forecast"
                        class="weather-forecast-icon"
                    >
                    <div class="weather-forecast-temperature">
                        <div class="weather-forecast-temperature-max">
                            <strong>10º</strong>
                        </div>
                        <div class="weather-forecast-temperature-min">6º</div>
                    </div>
                </div>
            
      `;
    }) ;

    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
}

let form = document.querySelector("#form");
form.addEventListener("submit", handleSearchSubmit);

searchCity("kyiv");
showForecast();

