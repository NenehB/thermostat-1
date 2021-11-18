describe ('Thermostat',function(){
  
  beforeEach(function(){
    thermostat = new Thermostat();
  });

    it('Starts at 20 degrees', function(){
      expect(thermostat.temperature()).toEqual(20)
    });

    it('increase the temperature up', function(){
      thermostat.temperatureUp();
      thermostat.temperatureUp();
      expect(thermostat.temperature()).toEqual(22)
    });

    it('decrease the temperature', function(){
      thermostat.temperatureDown();
      thermostat.temperatureDown();
      expect(thermostat.temperature()).toEqual(18)
    });

    it('has a minimum temp of 10', function(){
      expect(thermostat.minTemp).toEqual(10)
    });

    it('doesnt allow the temp to go below the minimum', function(){
      thermostat.temperatureDown();
      thermostat.temperatureDown();
      thermostat.temperatureDown();
      thermostat.temperatureDown();
      thermostat.temperatureDown();
      thermostat.temperatureDown();
      thermostat.temperatureDown();
      thermostat.temperatureDown();
      thermostat.temperatureDown();
      thermostat.temperatureDown();
      thermostat.temperatureDown();
      expect(thermostat.temperatureDown()).toEqual(10)
    });

    it('on power saving mode, max temp 25 deg', function(){
      expect(thermostat.powerSavingModeOn()).toEqual(25)
    });

    it('on power saving mode off, max temp 32 deg', function(){
      expect(thermostat.powerSavingModeOff()).toEqual(32)
    });

    it('power saving mode is on by default', function(){
      expect(thermostat.MaxTemp).toEqual(25)
    });

    it('reset the temperature', function(){
      expect(thermostat.reset()).toEqual(20)
    });

    it('medium usage', function(){
      expect(thermostat.usage()).toEqual('Medium-usage')
    });
    it('low usage', function(){
      thermostat.temperatureDown()
      thermostat.temperatureDown()
      thermostat.temperatureDown()
      expect(thermostat.usage()).toEqual('low-usage')
    });
    it('high usage', function(){
      thermostat.temperatureUp()
      thermostat.temperatureUp()
      thermostat.temperatureUp()
      thermostat.temperatureUp()
      thermostat.temperatureUp()
      thermostat.temperatureUp()
      expect(thermostat.usage()).toEqual('high-usage')
    });
});


