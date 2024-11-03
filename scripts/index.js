const apiKey = `3fcd347b1387870b170d9528afb16fa6`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&&units=metric&q=`;

import time from "./time.js";

const cityName = document.querySelector('.city');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind');
let input = document.querySelector('.weather-input');
const checkBtn = document.querySelector('.check--btn');
let image = document.querySelector('.weather-icon');
let container = document.querySelector('.weather');
let errorMessage = document.querySelector('.error');
let countryId = document.querySelector('.country');
const mainContainer = document.querySelector('.card');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        errorMessage.style.display = "block"
        container.style.display = "none"
    }else{
        errorMessage.style.display = "none";
        container.style.display = "block"

        let data = await response.json();
      
       let dayImage = time(data.timezone)

        cityName.innerHTML = ` ${data.name}`;
        temperature.innerHTML = `${ Math.round(data.main.temp) }°C` ;
        countryId.innerHTML = `(${data.sys.country})`
        humidity.innerHTML = `${data.main.humidity}%` ;
        windSpeed.innerHTML = `${data.wind.speed} km/h`

        let imageData = data.weather[0].main;

        if(dayImage){
            mainContainer.style.background = 'linear-gradient(135deg, #90caf9 , #0d47a1 )';
            switch(imageData){
                case "Clear":
                    image.src =`images/sun.png`
                    break;
                case  "Clouds":
                    image.src =`images/cloudy.png`
                    break;
                case  "Drizzle":
                    image.src=`images/rainy-color.png`
                    break;
                case  "Mist":
                    image.src=`images/foggy-day.png`
                    break;
                case "Rain":
                    image.src=`images/heavy-rain.png`
                    break;
                 case  "Snow":
                    image.src=`images/snowy.png`
                    break;
                default:
                image.src= `images/storm.png`
        }

        }else {
            mainContainer.style.background = 'linear-gradient(135deg, #2c8ddd , #062450 )';

            switch(imageData){
                case "Clear":
                    image.src =`images/clear-night.png`
                    break;
                case  "Clouds":
                    image.src =`images/cloudy-night.png`
                    break;
                case  "Drizzle":
                    image.src=`images/drizzle-night.png`
                    break;
                case  "Mist":
                    image.src=`images/fog-night.png`
                    break;
                case "Rain":
                    image.src=`images/rain-night.png`
                    break;
                 case  "Snow":
                    image.src=`images/cloud-moon.png`
                    break;
                default:
                image.src= `images/storm.png`
        }
        }
    }

    input.value = '';
}


checkBtn.addEventListener('click', ()=>{
    
    checkWeather(input.value)
    
})

window.addEventListener('keydown', ()=>{
    if(event.key === "Enter"){
        checkWeather(input.value)
    }
})




