class Thermostat {
  constructor(temp) {
    this.startTemp = 20; 
    this.minTemp = 10;
    this.MaxTemp = 0; 
    this.powerSavingModeOn();
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

  powerSavingModeOn(){
    return this.MaxTemp = 25;
  }

  powerSavingModeOff(){
    return this.MaxTemp = 32;
  }
}
