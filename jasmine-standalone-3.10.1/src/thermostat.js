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

  temperatureUp(){
    return this.startTemp += 1;
  }

  temperatureDown() { 
    if ((this.startTemp - 1) < this.minTemp){
      return this.minTemp;
    }
    else {
      return this.startTemp -= 1;
    }
  }

  powerSavingModeOn(){
    return this.MaxTemp = 25;
  }

  powerSavingModeOff(){
    return this.MaxTemp = 32;
  }

  reset(){
    return this.startTemp = 20;
  }

  usage(){
    if (this.startTemp < 18 ) {
      return 'low-usage'
    }
    else if (this.startTemp <= 25){
      return 'Medium-usage';
    }
    else {
      return 'high-usage';
    }
  }
}






console.log();
