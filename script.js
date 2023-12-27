// 1st step a amra api ta add korlam
const apiKey = "8ab37d7422023121b48661b099f09baa";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// 2nd amdar search input k select kora value gulo nilam
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
//  let weather = document.querySelector(".weather")

// 3rd amra search ar value ta akta funaction ar modha pathalam click event ar help niya
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  // weather.style.display = "block"
});

searchBox.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkWeather(searchBox.value);
  }
});

// 4th amdar funcation ta k banailam and api ta set korlam funaction ar vator a
async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {

    let data = await response.json();

    console.log(data);

    // 5th api thaka amdar dorkari data gulo k html a patay delam
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
