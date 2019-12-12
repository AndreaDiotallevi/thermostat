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

  $("#change-city").click(function(event) {
    var cityName = document.getElementById("city-name").value;
    getWeather(cityName);
  });

  function getWeather(cityName) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=";
    var appId = "&APPID=7dca333c2a0290c11d8c820868e8f829";
    $.getJSON(url + cityName + appId, function(data) {
      $('#weather-city').text(data.name);
      $('#weather-temperature').text(Math.round(data.main.temp - 273.15));
      $('#weather-description').text(data.weather[0].description);
      // $('#weather-temperature').text(JSON.stringify(data));
    });
  };

  getWeather("London");
});
