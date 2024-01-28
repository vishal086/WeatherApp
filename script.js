
const apiKey = "7b1eec1277b3bacc479dc98125d2f178";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const icon = document.querySelector(".icon");
const searchInput = document.querySelector('#search-input')
async function checkWeather(city) 
{
   const response = await fetch(apiUrl + city + `&apiKey=${apiKey}`);

   if(response.status == 404)
   {
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
   }
   else
   {
    var data = await response.json();
    console.log(data);
 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
 
    if(data.weather[0].main == 'Clouds')
    {
       icon.src = "weather.png"
    }
 
    else if(data.weather[0].main == 'Rain')
    {
       icon.src = "Rain.png"
    }
    else if(data.weather[0].main == 'Clear')
    {
       icon.src = "suny.png"
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"
}

  
}


searchBtn.addEventListener('click',() =>{
    checkWeather(searchBox.value);
})

searchInput.addEventListener('keypress',function(event){
   if(event.key == "Enter")
   {
      checkWeather(searchBox.value);
   }
})

