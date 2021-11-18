document.addEventListener("DOMContentLoaded", () => {
  
  
  const thermostat = new Thermostat();

  document.querySelector('#submit_button').addEventListener('click', (event) => {
    event.preventDefault();
   const city = document.querySelector('#city_selector').value; 
  

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}`).then((response) => {
    return response.json()
      })
    .then((data) => {
      document.querySelector('#current-temperature').innerText = data.main.temp;
    })
   })

  document.querySelector('#temperature').innerText = thermostat.temperature();

  document.querySelector('#temperature-up').addEventListener('click', () => { 
  thermostat.temperatureUp();
  document.querySelector('#temperature').innerText = thermostat.temperature(); 
  })
 


  document.querySelector('#temperature-down').addEventListener('click', () => { 
    thermostat.temperatureDown();
    document.querySelector('#temperature').innerText = thermostat.temperature(); 
  })

  document.querySelector('#temperature-reset').addEventListener('click', () => { 
    document.querySelector('#temperature').innerText = thermostat.reset();; 
  })

  document.querySelector('#powersaving-on').addEventListener('click', () => {
    thermostat.powerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    document.querySelector('#temperature').innerText = thermostat.powerSavingModeOn(); 
  })

  document.querySelector('#powersaving-off').addEventListener('click', () => {
    thermostat.powerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'off';
    document.querySelector('#temperature').innerText = thermostat.powerSavingModeOff();
  })
})
