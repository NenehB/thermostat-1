describe ('Thermostat',function(){
  it('Starts at 20 degrees', function(){
    thermostat = new Thermostat();
    expect(thermostat.temp()).toEqual(20)
  });
}); 


