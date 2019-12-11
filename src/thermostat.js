'use strict';

function Thermostat() {
  this._isPowerSavingModeOn = true
  this._MINIMUM_TEMPERATURE = 10
  this._DEFAULT_TEMPERATURE = 20
  this._MAXIMUM_TEMPERATURE_WITH_SAVING_MODE_ON = 25
  this._MAXIMUM_TEMPERATURE_WITH_SAVING_MODE_OFF = 32
  this._temperature = this._DEFAULT_TEMPERATURE
}

Thermostat.prototype.temperature = function() {
  return this._temperature
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._isPowerSavingModeOn
}

Thermostat.prototype.up = function() {
  if (this._isPowerSavingModeOn && this._temperature === this._MAXIMUM_TEMPERATURE_WITH_SAVING_MODE_ON) {
    throw new Error('You cannot go above 25 degrees when power saving mode is on')
  } else if (!this._isPowerSavingModeOn && this._temperature === this._MAXIMUM_TEMPERATURE_WITH_SAVING_MODE_OFF) {
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
  this._temperature = this._DEFAULT_TEMPERATURE
}

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18 ) {
     return "low-usage" 
  } else if (this._temperature >= 18 && this._temperature < 25) {
    return "medium-usage"
  } else {
    return "high-usage"
  }
}
