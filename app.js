const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const description = document.querySelector('.description');
const temperature = document.querySelector('.temperature');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + 
'&appid=eb109a6b779c6397240cb7e5e6748fa1')
  .then(response => response.json())
  .then(data => console.log(data))

  .catch(err => alert("Error: enter city name properly"))
})
