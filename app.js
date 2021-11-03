const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const description = document.querySelector('.description');
const temperature = document.querySelector('.temperature');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + 
'&appid=eb109a6b779c6397240cb7e5e6748fa1')
  .then(response => response.json())
  .then(data => {
      const nameValue = data['name'];
      const tempValue = data['main']['temp'];
      const descValue = data['weather'][0]['description'];

      name.innerHTML = nameValue;
      temp.innerHTML = tempValue;
      description.innerHTML = descValue;
  })

  .catch(err => alert("Error: enter city name properly"))
})
