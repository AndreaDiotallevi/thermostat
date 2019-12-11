function Thermostat() {
  this._temperature = 20
}

Thermostat.prototype.temperature = function() {
  return this._temperature
}

Thermostat.prototype.up = function() {
  return this._temperature +=1
}

Thermostat.prototype.down = function() {
  if (this._temperature === 10) {
    throw new Error('You cannot go below 10 degrees')
  }
  this._temperature -= 1
}