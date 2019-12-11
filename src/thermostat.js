function Thermostat() {
  this._temperature = 20
  this._isPowerSavingModeOn = true
  this._MINIMUM_TEMPERATURE = 10
}

Thermostat.prototype.temperature = function() {
  return this._temperature
}

Thermostat.prototype.up = function() {
  if (this._isPowerSavingModeOn && this._temperature === 25) {
    throw new Error('You cannot go above 25 degrees when power saving mode is on')
  } else if (!this._isPowerSavingModeOn && this._temperature === 32) {
    throw new Error('You cannot go above 32 degrees when power saving mode is off')
  }
  return this._temperature +=1
}

Thermostat.prototype.down = function() {
  if (this._temperature === this._MINIMUM_TEMPERATURE) {
    throw new Error('You cannot go below 10 degrees')
  }
  this._temperature -= 1
}

Thermostat.prototype.savingModeOn = function() {
  this._isPowerSavingModeOn = true
}

Thermostat.prototype.savingModeOff = function() {
  this._isPowerSavingModeOn = false
}

Thermostat.prototype.reset = function() {
  this._temperature = 20
}