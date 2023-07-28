document.addEventListener("DOMContentLoaded", function () {
    var response = fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=15a19c21cf148d2b92e9e11c314a78f5&units=imperial")
        .then(function (response) { return response.json() })
        .then(function (data) {
            displayWeatherData(data);
        })
        .catch(function (error) {
            console.error("Error fetching weather data", error);
        });

    document.getElementById("searchButton").addEventListener("click", function () {
        var locationInput = document.getElementById("locationInput").value;
        if (locationInput.trim() !== "") {
            var query = "q=" + encodeURIComponent(locationInput) + "&units=imperial";
            fetchWeatherData(query);
        }
    });

    function fetchWeatherData(query) {
        var apiKey = "15a19c21cf148d2b92e9e11c314a78f5";
        var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?" + query + "&appid=" + apiKey;

        fetch(apiUrl)
            .then(function (response) { return response.json() })
            .then(function (data) {
                displayWeatherData(data);
            })
            .catch(function (error) {
                console.error("Error fetching weather data", error);
            });
    }

    function displayWeatherData(data) {
        var forecastDates = getUniqueDates(data);

        for (var i = 0; i < forecastDates.length; i++) {
            var dayForecast = getForecastForDate(data, forecastDates[i]);
            updateForecastContainer(dayForecast, "day-" + (i + 1));
        }
    }

    function getUniqueDates(data) {
        var dates = [];
        for (var i = 0; i < data.list.length; i++) {
            var forecastDate = new Date(data.list[i].dt * 1000).toLocaleDateString(undefined, { year: "numeric", month: "numeric", day: "numeric" });
            if (!dates.includes(forecastDate)) {
                dates.push(forecastDate);
            }
        }
        return dates;
    }

    function getForecastForDate(data, date) {
        for (var i = 0; i < data.list.length; i++) {
            var forecastDate = new Date(data.list[i].dt * 1000).toLocaleDateString(undefined, { year: "numeric", month: "numeric", day: "numeric" });
            if (forecastDate === date) {
                return data.list[i];
            }
        }
        return null;
    }

    function updateForecastContainer(data, containerId) {
        var forecastContainer = document.getElementById(containerId);
        var temperatureElement = forecastContainer.querySelector(".temperature");
        var descriptionElement = forecastContainer.querySelector(".description");

        var temperature = data.main.temp;
        var description = data.weather[0].description;

        temperatureElement.textContent = temperature + "°F";
        descriptionElement.textContent = description;
    }
});