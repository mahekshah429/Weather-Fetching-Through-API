const card = document.getElementById("weatherCard");

fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure,weather_code")
  .then(res => res.json())
  .then(({ current }) => {
    const info = {
      "Temperature": `${current.temperature_2m}°C`,
      "Feels Like": `${current.apparent_temperature}°C`,
      "Humidity": `${current.relative_humidity_2m}%`,
      "Precipitation": `${current.precipitation} mm`,
      "Rain": `${current.rain} mm`,
      "Showers": `${current.showers} mm`,
      "Snowfall": `${current.snowfall} mm`,
      "Cloud Cover": `${current.cloud_cover}%`,
      "Pressure (MSL)": `${current.pressure_msl} hPa`,
      "Surface Pressure": `${current.surface_pressure} hPa`,
      "Wind Speed": `${current.wind_speed_10m} km/h`,
      "Wind Gusts": `${current.wind_gusts_10m} km/h`,
      "Wind Direction": `${current.wind_direction_10m}°`,
      "Time of Day": current.is_day ? "Day" : "Night",
      "Weather Code": current.weather_code
    };

    card.innerHTML = `<h2>Berlin Weather</h2>` + 
      Object.entries(info).map(
        ([key, val]) => `<div class="weather-detail"><strong>${key}:</strong> ${val}</div>`
      ).join('');
  })
  .catch(() => {
    card.innerHTML = "<h2>Error loading data</h2>";
  });
