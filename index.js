const api = {
   key: "96e0fc9c571229bac6c03a4d58882321",
   base:"https://api.openweathermap.org/data/2.5/",
   lang: "pt_br",
   units: "metric"
}

const card = document.querySelector('.card')

const city = document.querySelector('.location .city');
const now = new Date();
const date = document.querySelector('.location .date');
const temp = document.querySelector('.current .temp');
const temp_icon = document.querySelector('.current .icon');
const weather_el = document.querySelector('.current .weather');
const humidity_t = document.querySelector('.humidity');
const wind = document.querySelector('.wind');


const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);
function setQuery(evt) {
    if(evt.keyCode == 13){
        getResult(searchbox.value);
    }
}




async function getResult(query) { 
    
    try {
    const response = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=${api.lang}`)    
    const data = await response.json()
    

    card.style.display = 'block'
    city.innerHTML = `${data.name}`

    let now = new Date();
    date.innerHTML = dateBuilder(now)
    temp.innerHTML = `${Math.round(data.main.temp)}<span>ºc</span>`
    temp_icon.src = `httpsgi://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weather_el.innerHTML = data.weather[0].description;
    humidity_t.innerHTML = `umidade ${data.main.humidity}<span>%</span>`
    wind.innerHTML = `vento: ${data.wind.speed} <span>km/h</span>`

    } catch (error) {
        console.log(error);
        alert('Nome desconhecido')
    }
   
}

function dateBuilder(d) {
    let months = ['jan','fev','mar','abr','maio','jun','jul','ago','set','out','nov','dez'];
    let days = ['dom','seg','ter','quart','quint','sext','sab'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}














