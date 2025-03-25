// Simulated weather data (hardcoded for demonstration purposes)
const weatherData = {
   "Tenkasi": {
        "temperature": 32,
        "humidity": 60,
        "description": "Mostly cloudy",
        "forecast": "Turning cloudy and very warm; a little rain late this afternoon, High: 38°C, Low: 22°C"
    },
    "Theni": {
        "temperature": 35,
        "humidity": 65,
        "description": "Partly sunny",
        "forecast": "Sunny to partly cloudy and very warm, High: 37°C, Low: 22°C"
    },
    "Chennai": {
        "temperature": 31,
        "humidity": 70,
        "description": "Sunny",
        "forecast": "Partly to mostly sunny, High: 35°C, Low: 24°C"
    },
    "Coimbatore": {
        "temperature": 36,
        "humidity": 55,
        "description": "Mostly sunny",
        "forecast": "Mostly sunny and very warm, High: 37°C, Low: 23°C"
    },
    "Madurai": {
        "temperature": 35,
        "humidity": 60,
        "description": "Partly sunny",
        "forecast": "Mostly sunny and very warm, High: 36°C, Low: 26°C"
    },
    "Salem": {
        "temperature": 36,
        "humidity": 50,
        "description": "Partly sunny",
        "forecast": "Sunshine and a few clouds, very warm and less humid, High: 39°C, Low: 23°C"
    },
    "Dindigul": {
        "temperature": 37,
        "humidity": 45,
        "description": "Sunny",
        "forecast": "Sunny and very warm, High: 39°C, Low: 24°C"
    },
    "Erode": {
        "temperature": 38,
        "humidity": 40,
        "description": "Mostly sunny",
        "forecast": "Sunny and very warm, High: 39°C, Low: 24°C"
    },
    "Kanchipuram": {
        "temperature": 35,
        "humidity": 65,
        "description": "Mostly sunny",
        "forecast": "Mostly sunny and very warm, High: 41°C, Low: 22°C"
    },
    "Kanyakumari": {
        "temperature": 31,
        "humidity": 75,
        "description": "Partly sunny",
        "forecast": "Some sunshine giving way to clouds, High: 34°C, Low: 26°C"
    },
    "Karur": {
        "temperature": 39,
        "humidity": 35,
        "description": "Mostly sunny",
        "forecast": "Mostly sunny and very warm, High: 40°C, Low: 25°C"
    },
    "Krishnagiri": {
        "temperature": 36,
        "humidity": 50,
        "description": "Mostly sunny",
        "forecast": "Mostly sunny and very warm, High: 38°C, Low: 20°C"
    },
    "Nagapattinam": {
        "temperature": 31,
        "humidity": 80,
        "description": "Mostly sunny",
        "forecast": "Sunshine and very warm, High: 37°C, Low: 26°C"
    },
    "Nilgiris": {
        "temperature": 19,
        "humidity": 85,
        "description": "Clouds and sun",
        "forecast": "Variable cloudiness with showers this afternoon, High: 22°C, Low: 13°C"
    },
    "Perambalur": {
        "temperature": 39,
        "humidity": 40,
        "description": "Sunny",
        "forecast": "Mostly sunny and very warm, High: 41°C, Low: 23°C"
    },
    "Pudukkottai": {
        "temperature": 38,
        "humidity": 45,
        "description": "Sunny",
        "forecast": "Mostly sunny and very warm, High: 41°C, Low: 24°C"
    },
    "Ramanathapuram": {
        "temperature": 36,
        "humidity": 50,
        "description": "Sunny",
        "forecast": "Sunshine and very warm, High: 38°C, Low: 27°C"
    },
    "Sivaganga": {
        "temperature": 39,
        "humidity": 45,
        "description": "Sunny",
        "forecast": "Mostly sunny and very warm, High: 41°C, Low: 25°C"
    },
    "Thanjavur": {
        "temperature": 35,
        "humidity": 60,
        "description": "Sunny",
        "forecast": "Mostly sunny and very warm, High: 41°C, Low: 24°C"
    },
    "Thoothukudi": {
        "temperature": 34,
        "humidity": 65,
        "description": "Mostly sunny",
        "forecast": "Mostly sunny and very warm, High: 37°C, Low: 23°C"
    },
    "Tiruchirappalli": {
        "temperature": 40,
        "humidity": 35,
        "description": "Mostly sunny",
        "forecast": "Mostly sunny and very warm, High: 41°C, Low: 24°C"
    },
    "Tirunelveli": {
        "temperature": 32,
        "humidity": 60,
        "description": "Mostly cloudy",
        "forecast": "Turning cloudy and very warm; a little rain late this afternoon, High: 38°C, Low: 22°C"
    },
    "Tiruvannamalai": {
        "temperature": 38,
        "humidity": 50,
        "description": "Sunny",
        "forecast": "Mostly sunny and very warm, High: 41°C, Low: 23°C"
    },
    "Vellore": {
        "temperature": 38,
        "humidity": 45,
        "description": "Mostly sunny",
        "forecast": "Mostly sunny, very warm and less humid, High: 41°C, Low: 21°C"
    },
    "Villupuram": {
        "temperature": 35,
        "humidity": 60,
        "description": "Mostly sunny",
        "forecast": "Very warm with sunshine and a few clouds, High: 40°C, Low: 22°C"
    },
    "Virudhunagar": {
        "temperature": 38,
        "humidity": 50,
        "description": "Mostly sunny",
        "forecast": "Mostly sunny and very warm, High: 40°C, Low: 25°C"
    }
};

// Function to get weather data from the hardcoded list
function getWeather() {
    const city = document.getElementById('cityInput').value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // Check if the city exists in the simulated data
    if (weatherData[city]) {
        displayWeather(weatherData[city], city);
    } else {
        showError("City not found! Please try again.");
    }
}

// Function to display weather data
function displayWeather(data, city) {
    document.getElementById('error-message').classList.add('hidden');
    document.getElementById('weather-info').classList.remove('hidden');

    document.getElementById('city-name').textContent = `${city}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.temperature}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
    document.getElementById('weather-description').textContent = `Weather: ${data.description}`;
}

// Function to show error messages
function showError(message) {
    document.getElementById('error-message').textContent = message;
    document.getElementById('error-message').classList.remove('hidden');
    document.getElementById('weather-info').classList.add('hidden');
}

// Adding event listener to the button
document.getElementById('searchButton').addEventListener('click', getWeather);

// Optional: Allow pressing Enter key to trigger search
document.getElementById('cityInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});
