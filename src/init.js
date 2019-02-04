document.addEventListener("DOMContentLoaded", function() {
  const ctx = document.querySelector("#NYCWeatherChart").getContext("2d")
  const API_KEY = "e9e6c989999db04e433a8dae60bd9782";
  const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const DARK_SKY_BASE = "https://api.darksky.net/"
  const URL = `${CORS_WRAPPER}${DARK_SKY_BASE}/forecast/${API_KEY}/40.7127,-74.0059?exclude=currently,minutely,daily`

  // makeRequest fetches to DarkSky and appends the chart to the DOM
  makeRequest(URL, ctx)
});
