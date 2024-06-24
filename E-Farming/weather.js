// script.js
async function searchWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = '7a8f49b02ddca7f15214157ee576ca4a'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weatherInfo = document.getElementById('weather-info');
        if (data.cod === 200) {
            const { name, main, weather } = data;
            const temperature = main.temp;
            const description = weather[0].description;
            const icon = weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

            weatherInfo.innerHTML = `
                <h2>${name}</h2>
                <img src="${iconUrl}" alt="${description}">
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;
        } else {
            weatherInfo.textContent = `City not found: ${city}`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}