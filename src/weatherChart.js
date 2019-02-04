let chartContainer = document.querySelector("#NYCWeatherChart")

function formatHours(hourlyData){
  // your code here
  let formattedTimes = hourlyData.map(function(hourData){
       return (parseInt(hourData.time) * 1000)
  })
  return formattedTimes
}

function formatFahrenheit(hourlyData){
  // your code here
  let formattedTemperatures = hourlyData.map(function(hourData){
    return (parseFloat(hourData.temperature))
  })
  return formattedTemperatures
}

function generateDataSet(hours, temperatures) {
  return {
    type: "line",
    data: {
      labels: hours,
      datasets: [
        {
          label: "NYC Weather Data",
          data: temperatures,
          backgroundColor: "rgba(100,150,220,0.2)",
          borderColor: "rgb(255, 99, 132)"
        }
      ]
    },
    options: {
      // additional configurations here
    }
  }
}

function makeRequest(endpoint, canvas) {
  // Your code goes here
  // After your fetch works - format the response using the helper functions above:
  // convert darksky timestamps
  // const formattedHours = formatHours(/*data from darksky*/)
  // extract temperatures from darksky data
  // const formattedTemps = formatFahrenheit(/*data from darksky*/)
  // create config object for chart.js
  // const chartDataset = generateDataSet(formattedHours, formattedTemps)
  // append the chart to the DOM
  // new Chart(canvas, chartDataset)
  fetch(endpoint)
//    .then(response => console.log(response))
    .then(response => response.json())
    //.then(parsed => console.log(parsed.hourly.data))
//    .then(parsed => console.log(formatHours(parsed.hourly.data)))

//    .then(parsed => console.log(parsed.hourly.data[0].temperature))
    .then(function(parsed){
      //console.log(formatHours(parsed.hourly.data))
      let formattedHours = formatHours(parsed.hourly.data)
      //console.log(formatFahrenheit(parsed.hourly.data))
      let formattedTemps = formatFahrenheit(parsed.hourly.data)
      let chartData = generateDataSet(formattedHours, formattedTemps)
      let weatherChart = new Chart(canvas, chartData)
      chartContainer.innerHTML += weatherChart
    })

    // .then(function(parsed){
    //   let myDate = new Date(parseInt(parsed.hourly.data[0].time) * 1000)
    //   console.log(myDate.getHours())
    //  })
}
