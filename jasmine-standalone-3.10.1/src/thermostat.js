class Thermostat {
  constructor(temp) {
    this.startTemp = 20; 
    this.minTemp = 10;
  }

  temperature(){
    return this.startTemp;
  }

  temperatureUp(number){
    return this.startTemp + number;
  }

  temperatureDown(number) { 
    if ((this.startTemp - number) < this.minTemp){
      return this.minTemp;
    }
    else {
      return this.startTemp - number;
    }
  }
}
