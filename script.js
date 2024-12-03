const API_KEY = "5f69e93a6e19012fc2aec0b9cc5bc26d" ;
// const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
// const img_url = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const from = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector("#weather")
 
const getWeather = async(city)=>{
     weather.innerHTML = `<h2>Loading.......</h2>`
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    const data = await response.json();
    showData(data);
    
    
}

const showData = (data)=>{
     if(data.cod == "404"){
        weather.innerHTML = `<h1>city not found</h1>`
        return;
     }

     console.log(data);
     weather.innerHTML = `
          <div>
                <img src="https:openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            </div>
            <div>
                <h2>${data.main.temp}℃</h2>
                <h3>${data.weather[0].main}</h3>
            </div>
     `
     
     
}

from.addEventListener("submit",function(event){
    getWeather(search.value);
    event.preventDefault();
})