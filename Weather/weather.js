//API key: 52e0a5fe5dbb04a9de4e4ad1bbd14d70
function getWeather()
{
    const apiKey = '52e0a5fe5dbb04a9de4e4ad1bbd14d70';
    const city = document.querySelector('.city').value;

    if (!city)
    {
        alert('Please enter city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl).then(response => response.json()).then((data) => {
        displayWeather(data);
    }).catch(error => {
        alert('Error fetching current weather data. Please try again.');
    });

    fetch(forecastUrl).then(response => response.json()).then(data => {
        displayHourlyForecast(data.list);
    }).catch(error => {
        alert('Error fetching current weather data. Please try again.');
    });
}
    function displayWeather(data)
    {
        const tempDivInfo = document.querySelector('.tempDivInfo');
        const weatherInfoDiv = document.querySelector('.weatherInfoDiv');
        const weatherIcon = document.querySelector('.weatherIcon');
        const hourlyForecastDiv = document.querySelector('.hourlyForecastDiv');
        // Clear previous content
        weatherInfoDiv.innerHTML = '';
        hourlyForecastDiv.innerHTML = '';
        tempDivInfo.innerHTML = '';
        if (data.cod === '404')
        {
            weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
        }
        else {
            const cityName = data.name;
            const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

            const temperatureHTML = `
                <p>${temperature}°C</p>
            `;

            const weatherHtml = `
                <p>${cityName}</p>
                <p>${description}</p>
            `;

            tempDivInfo.innerHTML = temperatureHTML;
            weatherInfoDiv.innerHTML = weatherHtml;
            weatherIcon.src = iconUrl;
            weatherIcon.alt = description;

            showImage();
        }
    }

function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.querySelector('.hourlyForecastDiv');

    const next24Hours = hourlyData.slice(0, 8); // Display the next 24 hours (3-hour intervals)

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15); // Convert to Celsius
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `;

        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

function showImage()
{
    const weatherIcon = document.querySelector('.weatherIcon');
    weatherIcon.style.display = 'block';
}