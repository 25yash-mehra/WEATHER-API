let fhead = document.getElementById("head");
let search = document.getElementById("search");
let temperature = document.getElementById("temp");
let image = document.getElementById("imag")
let humidity = document.getElementById("humidity")
let wind = document.getElementById("wind")
let city = document.getElementById("city")
let maxTemp = document.getElementById("maxTemp")
let minTemp = document.getElementById("minTemp")
// let clouds = document.getElementById("clouds")
let confirm = document.getElementById("submt")

async function checkWeather(city) {
  const api_key = '2612e2afd49966137b03c3456ba9e2c2'
  const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    temperature.innerHTML = ` ${Math.round(result.main.temp -  273.15)} °C`
    // temperature.innerHTML = `${temperature.innerHTML -  273.15} °C`
        humidity.innerHTML = `${result.main.humidity} %`
          wind.innerHTML = `${result.wind.speed} km/ph`
          maxTemp.innerHTML = `Max-Temp : ${ Math.round(result.main.temp_max - 273.15)} °C`
          minTemp.innerHTML = `Min-Temp : ${ Math.round(result.main.temp_min - 273.15)} °C`
          // image.src = result.weather.icon
          image.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
    } catch (error) {
      console.error(error);
    }
};

confirm.addEventListener("click", () => {
    checkWeather(search.value);
  });
fhead.addEventListener("submit", (e) => {
  e.preventDefault();
})
