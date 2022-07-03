const button = document.querySelector('.submit')
const input = document.querySelector('.input_text')
const main = document.querySelector('.city')
const desc = document.querySelector('.desc')
const temp = document.querySelector('.temp')
const cloud = document.querySelector('.clouds')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=3acbbe0d3c8690142ba17125de8e23f8')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name']
        let tempValue = data['main']['temp']+'°C'
        let cloudValue = data['clouds']['all']
        let descValue = data['weather'][0]['description']
        
        main.innerHTML = "City: "+nameValue
        temp.innerHTML = "Temperature: "+tempValue
        desc.innerHTML = "Description: "+descValue
        cloud.innerHTML = "Cloud: "+cloudValue
        input.value = "";
    })

.catch(error => alert('That city is not in the database. Try another one.'))
})

