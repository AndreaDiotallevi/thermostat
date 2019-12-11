describe ("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it ("Should start at 20 degrees", function() {
    expect(thermostat.temperature()).toEqual (20)
  })

  it ("Can increase the temperature", function() {
    thermostat.up()
    expect(thermostat.temperature()).toEqual (21)
  })
  
  it ("Can decrese the temperature", function() {
    thermostat.down()
    expect(thermostat.temperature()).toEqual (19)
  })

  it ("The minimum temperature is 10 degrees", function() {
    for (var i = 0; i < 10; i++) {
      thermostat.down()
    }
    expect(function() {thermostat.down()}).toThrowError('You cannot go below 10 degrees')
  })
})