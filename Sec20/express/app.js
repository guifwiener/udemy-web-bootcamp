const express = require("express");
const https = require("https");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=c56dc87ef63ac46af0295c8dd2b863e0&units=metric";

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(`<p>The weather in currently ${weatherDescription}</p>`);
      res.write(`<p>The temperature in London is ${temp} degree Celsius</p>`);
      res.write(`<img src="${imageURL}">`);
      res.send();
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
