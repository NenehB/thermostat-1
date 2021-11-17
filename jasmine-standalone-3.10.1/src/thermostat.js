class Thermostat {
  constructor(temp) {
    this.startTemp = 20; 
  }

  temperature(){
    return this.startTemp;
  }

  temperatureUp(number){
    return this.startTemp + number;
  }

  temperatureDown(number) { 
  return this.startTemp - number;
  }
}
