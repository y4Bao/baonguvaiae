const APP_ID = '13ba3f3182f8a9bbff3c9c2b82c275fd';
const DEFAULT_VALUE = '--';
const searchInput = document.querySelector('#search-input');
const cityName=document.querySelector('.city-name');
const weatherState=document.querySelector('.weather-state');
const weatherIcon=document.querySelector('.weather-icon');
const temperature=document.querySelector('.temperature');


const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');


searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${ APP_ID}&units=metric&lang=vi`)
        .then(async res =>{
            const data = await res.json();
            console.log('[Search Input]', data);
            cityName.innerHTML = data.name || DEFAULT_VALUE;
        });
});