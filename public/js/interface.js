$(document).ready(function() {
  var thermostat = new Thermostat();
  var city = "London";

  getData();
  setTemperature();
  getWeather(city);

  function postData() {
    $.ajax({
      type: "post",
      url: "/temperature",
      dataType: "json",
      data: { "temperature": thermostat.temperature,
              "isPowerSavingModeOn": thermostat.powerSavingMode,
              "city": city
            },
      success: function() {
      }
    });
  };

  function getData() {
    $.ajax({
      type: "get",
      url: "/temperature",
      dataType: "json",
      success: function(response) {
        thermostat.temperature = response.temperature;
        thermostat.powerSavingMode = response.powerSavingMode;
        city = response.city;
        setTemperature();
        getWeather(city);
      }
    });
  };

  function setTemperature() {
    $("#temperature").text(thermostat.temperature + " °C");
    $("#temperature").attr("class", thermostat.energyUsage());
    postData();
  }

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
    $("#temperature").text(thermostat.temperature + " °C");
    $("#power-saving-status").text("on");
    $('#power-saving-status').text("on")
    postData();
  });

  $("#powersaving-off").click(function(event) {
    thermostat.switchPowerSavingModeOff();
    $("#power-saving-status").text("off");
    $('#power-saving-status').text("off")
    postData();
  });

  $("#change-city").click(function(event) {
    city = $('#city-name').val();
    getWeather(city);
  });

  function getWeather(city) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=";
    var appId = "&APPID=7dca333c2a0290c11d8c820868e8f829";
    $.getJSON(url + city + appId, function(data) {
      $('#weather-city').text(data.name);
      $('#weather-temperature').text(Math.round(data.main.temp - 273.15));
      $('#weather-description').text(data.weather[0].description);
      // $('#weather-temperature').text(JSON.stringify(data));
    });
  };
});
