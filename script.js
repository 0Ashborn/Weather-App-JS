
getWeatherInformation = async (city) =>{
    //Getting information using API
    const apiKey = "51c16fef4e5d4957a5d55e5c1cdda41b";
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + apiKey);
    const data = await response.json();
    //Getting the data
    const {name} = data;
    const {description, icon} = data.weather[0];
    const {humidity, temp} = data.main;
    const {speed} = data.wind; 
    const {country} = data.sys;
    //Selecting elements
    

    document.getElementById('weather-top').firstElementChild.innerText = (temp/32).toFixed(2) + " °C";
    document.getElementById('weather-top').lastElementChild.innerText = description;
    document.getElementById('location').firstElementChild.innerText = name +", "+ country;
    document.getElementById('date').firstElementChild.innerText = "Wind Speed: " + speed +" km/h";
    document.getElementById('date').lastElementChild.innerText = "Humidity: " + humidity+"%";
    document.querySelector('img').src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
    document.querySelector('body').style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+")'";
}

const search = document.getElementById('search');
const input = document.getElementById('inp');

document.getElementById('test').style.height = "0px";

//Event Listners
search.addEventListener("click", () =>{
    
    if (!input.value){
        alert('Type in something');
    }
    getWeatherInformation(input.value);
    document.getElementById('test').style.height = "1px";
    document.getElementById('test').innerText= '';
    input.value = '';

});

input.addEventListener("keypress", (e) =>{
        if (!input.value && e.keyCode === 13){
            alert('Type in something');
        }else if(e.keyCode === 13){
        getWeatherInformation(input.value);
        document.getElementById('test').style.height = "1px";
        document.getElementById('test').innerText= '';
        input.value = '';
    }
});