const url = 'https://api.openweathermap.org/data/2.5'
const key = 'f4c4b8003a340fc33df9218a65a0ae98'

const setCity = (e) => {
    if(e.keyCode == '13')
        getResult(searchbar.value)

}

const getResult = (cityName) =>{
    let query = '${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr'
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
} 

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerHTML = '${result.name}, ${result.sys.country}'

    let temp = document.querySelector('.temp')
    temp.innerHTML = '${Math.round(result.main.temp)}'

    let desc = document.querySelector('.desc')
    desc.innerHTML = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerHTML = '${Math.round(result.main.temp_min)} / ${Math.round(result.main.temp_max)}' 

}

const searchbar = document.getElementById("searchBar")
searchbar.addEventListener('keypress', setCity)