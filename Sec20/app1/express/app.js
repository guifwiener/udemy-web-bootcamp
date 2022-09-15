const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const apiKey = "c56dc87ef63ac46af0295c8dd2b863e0";
  const unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apiKey}`;

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      res.write(`<p>The weather in ${query} is ${weatherDescription} right now.</p>`);
      res.write(`<p>The temperature in ${query} is ${temp} Celsius.</p>`);
      res.write(`<img src="${imgURL}">`);
      res.send();
    });
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
