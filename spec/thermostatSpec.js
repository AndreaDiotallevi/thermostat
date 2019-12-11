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

  it ("If the power saving mode is on, the maximum temperature is 25", function() {
    thermostat.savingModeOn();
    for (var i = 0; i < 5; i++) {
      thermostat.up()
    }
    expect(function() { thermostat.up() }).toThrowError('You cannot go above 25 degrees when power saving mode is on')
  })

  it ("If the power saving mode is off, the maximum temperature is 32", function() {
    thermostat.savingModeOff();
    for (var i = 0; i < 12; i++) {
      thermostat.up()
    }
    expect(function() { thermostat.up() }).toThrowError('You cannot go above 32 degrees when power saving mode is off')
  })

  it ("should have power saving mode on by default", function() {
    expect(thermostat.isPowerSavingModeOn()).toEqual(true)
  })

  it ("should be able to reset the temperature to 20 degrees", function() {
    thermostat.reset()
    expect(thermostat.temperature()).toEqual(20)
  })

  it ("Returns energy usage of 'low-usage' if temperature is below 18", function() {
    for (var i = 0; i < 3; i++) {
    thermostat.down()
    }
    expect(thermostat.energyUsage()).toEqual("low-usage")
  })

  it ("Returns energy usage of 'medium-usage' if temperature is between 18(included) and 25", function() {
    for (var i = 0; i < 3; i++) {
      thermostat.down()
    }
    for (var i = 0; i < 7; i++) {
      thermostat.up()
      expect(thermostat.energyUsage()).toEqual("medium-usage")
    }
  })

  it ("Returns energy usage of 'high-usage' if temperature is above 25(included)", function() {
    for (var i = 0; i < 5; i++) {
    thermostat.up()
    }
    expect(thermostat.energyUsage()).toEqual("high-usage")
  })

})
