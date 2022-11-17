/* 
let autocomplete = {
  apiKey: "68381797ed49416ea8929d7d6ad6c6c3",
  fetchCities: function(){
    fetch(
      "https://api.geoapify.com/v1/geocode/autocomplete?"
      + "apiKey=" + this.apiKey
      + "type=city" 
      + "lang=en"
      + "format=json"
    )
    .then((response) => response.json())
    .then((data) => this.display(data));
}
} */

let weather = {
    apiKey: "af9de29ff786c92c86b9fae6fad3ad2b",
    fetchWeather: function (city) {
        fetch(
             "https://api.openweathermap.org/data/2.5/weather?q=" 
             + city 
             +  "&units=metric&appid=" 
             + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.getElementById("city").innerText = name;
        document.querySelector(".icon").src = 
        "img/iconos/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity " + humidity + "%";
        document.querySelector(".wind").innerText = "Windspeed: " + speed + "km/h";
        document.querySelector("#myVideo").src = 
        "video/" + icon + ".mp4";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      },
    };
    
    document.querySelector(".search button").addEventListener("click", function () {
      weather.search();
    });
    
    document
      .querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
      });
    
    weather.fetchWeather("Denver");   

// Clear input
const clearInput = () => {
    const getValue = document.getElementById("formulario");
    if (getValue.value != "") {
        getValue.value = "";
        resultado.innerHTML = '';
    } else if (getValue.value == ""){
        getValue.value = "";
        resultado.innerHTML = '';
    }
}

// Cerrar buscador

document.addEventListener('click', function handleClickOutsideBox(event) {
  const box = document.getElementById('formulario');
    
  if (!box.contains(event.target)) {
      clearInput();
  }
});

// Clear Input con ESC

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		clearInput();
	}
});