$(document).ready(function() {
  var thermostat = new Thermostat();

  function setTemperature() {
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr("class", thermostat.energyUsage());
  }

  setTemperature();

  $("#temperature-up").click(function(event) {
    thermostat.up();
    setTemperature();
  });

  $("#temperature-down").click(function(event) {
    thermostat.down();
    setTemperature();
  });

  $("#temperature-reset").click(function(event) {
    thermostat.resetTemperature();
    setTemperature();
  });

  $("#powersaving-on").click(function(event) {
    thermostat.switchPowerSavingModeOn();
    $("#temperature").text(thermostat.temperature);
    $("#power-saving-status").text("on");
  });

  $("#powersaving-off").click(function(event) {
    thermostat.switchPowerSavingModeOff();
    $("#power-saving-status").text("off");
  });
});
