document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();
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

})