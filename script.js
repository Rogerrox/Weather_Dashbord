var apiKey = "32ee970c087eab3aeed6412f800ca5a1";


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

//fetch ("api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}")

var searchBtn = document.getElementById("search")


searchBtn.addEventListener("click",function(event){
    event.preventDefault()
    var city = document.getElementById("city-input").value
    console.log(city)
    getCurrentWeather(city)
    getFiveDayForcast(city)
})



function getCurrentWeather(city){
    var URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    fetch(URL)
    .then(response => response.json())
    .then(apiResponse => {
        console.log(apiResponse)
        const HTML = `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${apiResponse.name}</h5>
        <img src="https://openweathermap.org/img/wn/${apiResponse.weather[0].icon}@2x.png" class="card-img-top" alt="...">
          <p class="card-text">Temperature: ${apiResponse.main.temp}</p>
          <p class="card-text">Windspeed: ${apiResponse.wind.speed}</p>
          <p class="card-text">Humidity: ${apiResponse.main.humidity}</p>
          <p class="card-text">Description: ${apiResponse.weather[0].main}</p>
                </div>
      </div>`
      document.getElementById("current").innerHTML = HTML
    })
}
function getFiveDayForcast(city){
    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    var URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
    fetch(URL)
    .then(response => response.json())
    .then(apiResponse => {
        console.log(apiResponse)
      
        let HTML =""
        for(let i=0;i<apiResponse.list.length;i=i+8){
        HTML += `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h6 class="card-title">${apiResponse.list[i].dt_txt}</h6>
        <img src="https://openweathermap.org/img/wn/${apiResponse.list[i].weather[0].icon}@2x.png" class="card-img-top" alt="...">
          <p class="card-text">Temperature: ${apiResponse.list[i].main.temp}</p>
          <p class="card-text">Windspeed: ${apiResponse.list[i].wind.speed}</p>
          <p class="card-text">Humidity: ${apiResponse.list[i].main.humidity}</p>
          <p class="card-text">Description: ${apiResponse.list[i].weather[0].main}</p>
                </div>
      </div>`
        }
      document.getElementById("fiveDay").innerHTML = HTML
    })
}