// NAV RESPONSIVE
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// API CALL
const API_KEY = '376f1edcd27c6023c2fc1c3f6c69d33e';
const cities = ['Uttar Pradesh', 'Delhi', 'Mumbai', 'Kolkata', 'Odisha', 'Madhya Pradesh'];

cities.forEach(city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            updateWeatherData(city, data);
        })
        .catch(error => console.error('Error:', error));
});



function updateWeatherData(city, data) {
    const stateElements = document.querySelectorAll('.state-name');
    const stateElement = Array.from(stateElements).find(el => el.textContent.includes(city));
    
    if (stateElement) {
        const card = stateElement.closest('.text-center');
        card.querySelector('.temp').textContent = `${data.main.temp}°C`;
        card.querySelector('.min-max').textContent = `${data.main.temp_min}°C / ${data.main.temp_max}°C`;
        card.querySelector('.speed-deg').textContent = `${data.wind.speed} m/s, ${data.wind.deg}°`;
        card.querySelector('.coord').textContent = `${data.coord.lat}, ${data.coord.lon}`;
        card.querySelector('.humidity').textContent = `${data.main.humidity}%`;
        
        // Update weather icon
        const iconElement = card.querySelector('i');
        updateWeatherIcon(iconElement, data.weather[0].main);
    }
    
    // Update current weather for Uttar Pradesh
    if (city === 'Uttar Pradesh') {
        const container = document.querySelector('.container');
        container.querySelector('.bg-white:first-child .text-4xl').textContent = `${data.main.temp}°C`;
        container.querySelector('.bg-white:first-child .text-gray-600').textContent = data.weather[0].main;
        container.querySelector('.bg-white:first-child .state-name').textContent = `${data.name}, ${data.sys.country}`;
        
        const infoElements = container.querySelectorAll('.bg-white:first-child .text-sm');
        infoElements.forEach(el => {
            if (el.textContent.includes('Humidity')) el.textContent = `Humidity: ${data.main.humidity}%`;
            if (el.textContent.includes('Wind')) el.textContent = `Wind: ${data.wind.speed} m/s`;
            if (el.textContent.includes('Feels like')) el.textContent = `Feels like: ${data.main.feels_like}°C`;
            if (el.textContent.includes('Temp min/max')) el.textContent = `Temp min/max: ${data.main.temp_min}°C / ${data.main.temp_max}°C`;
        });
        
        // Update weather icon for current weather
        const currentWeatherIcon = container.querySelector('.bg-white:first-child .text-6xl');
        updateWeatherIcon(currentWeatherIcon, data.weather[0].main);
    }
}

function updateWeatherIcon(iconElement, weatherCondition) {
    iconElement.className = ''; // Clear existing classes
    switch(weatherCondition.toLowerCase()) {
        case 'clear':
            iconElement.classList.add('fas', 'fa-sun', 'text-yellow-500');
            break;
        case 'clouds':
            iconElement.classList.add('fas', 'fa-cloud', 'text-gray-600');
            break;
        case 'rain':
            iconElement.classList.add('fas', 'fa-cloud-showers-heavy', 'text-blue-600');
            break;
        case 'snow':
            iconElement.classList.add('fas', 'fa-snowflake', 'text-blue-300');
            break;
        default:
            iconElement.classList.add('fas', 'fa-cloud-sun', 'text-gray-600');
    }
}





// // NAV RESPONSIVE
// const mobileMenuButton = document.getElementById('mobile-menu-button');
// const mobileMenu = document.getElementById('mobile-menu');

// mobileMenuButton.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
// });

// // API CALL
// const API_KEY = '376f1edcd27c6023c2fc1c3f6c69d33e';
// const cities = ['Uttar Pradesh', 'Delhi', 'Mumbai', 'Kolkata', 'Odisha', 'Madhya Pradesh'];

// cities.forEach(city => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             updateWeatherData(city, data);
//         })
//         .catch(error => console.error('Error:', error));
// });

// function updateWeatherData(city, data) {
//     const stateElements = document.querySelectorAll('.state-name');
//     const stateElement = Array.from(stateElements).find(el => el.textContent.includes(city));
    
//     if (stateElement) {
//         const card = stateElement.closest('.text-center');
//         card.querySelector('.temp').textContent = `${data.main.temp}°C`;
//         card.querySelector('.min-max').textContent = `${data.main.temp_min}°C / ${data.main.temp_max}°C`;
//         card.querySelector('.speed-deg').textContent = `${data.wind.speed} m/s, ${data.wind.deg}°`;
//         card.querySelector('.coord').textContent = `${data.coord.lat}, ${data.coord.lon}`;
//         card.querySelector('.humidity').textContent = `${data.main.humidity}%`;
        
//         // Update weather icon
//         const iconElement = card.querySelector('i');
//         updateWeatherIcon(iconElement, data.weather[0].main);
//     }
    
//     // Update current weather for Uttar Pradesh
//     if (city === 'Uttar Pradesh') {
//         const container = document.querySelector('.container');
//         container.querySelector('.bg-white:first-child .text-4xl').textContent = `${data.main.temp}°C`;
//         container.querySelector('.bg-white:first-child .text-gray-600').textContent = data.weather[0].main;
//         container.querySelector('.bg-white:first-child .state-name').textContent = `${data.name}, ${data.sys.country}`;
        
//         const infoElements = container.querySelectorAll('.bg-white:first-child .text-sm');
//         infoElements.forEach(el => {
//             if (el.textContent.includes('Humidity')) el.textContent = `Humidity: ${data.main.humidity}%`;
//             if (el.textContent.includes('Wind')) el.textContent = `Wind: ${data.wind.speed} m/s`;
//             if (el.textContent.includes('Feels like')) el.textContent = `Feels like: ${data.main.feels_like}°C`;
//             if (el.textContent.includes('Temp min/max')) el.textContent = `Temp min/max: ${data.main.temp_min}°C / ${data.main.temp_max}°C`;
//         });
        
//         // Update weather icon for current weather
//         const currentWeatherIcon = container.querySelector('.bg-white:first-child .text-6xl');
//         updateWeatherIcon(currentWeatherIcon, data.weather[0].main);
//     }
// }

// function updateWeatherIcon(iconElement, weatherCondition) {
//     iconElement.className = ''; // Clear existing classes
//     switch(weatherCondition.toLowerCase()) {
//         case 'clear':
//             iconElement.classList.add('fas', 'fa-sun', 'text-yellow-500');
//             break;
//         case 'clouds':
//             iconElement.classList.add('fas', 'fa-cloud', 'text-gray-600');
//             break;
//         case 'rain':
//             iconElement.classList.add('fas', 'fa-cloud-showers-heavy', 'text-blue-600');
//             break;
//         case 'snow':
//             iconElement.classList.add('fas', 'fa-snowflake', 'text-blue-300');
//             break;
//         default:
//             iconElement.classList.add('fas', 'fa-cloud-sun', 'text-gray-600');
//     }
// }