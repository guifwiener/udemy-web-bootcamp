const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact me at my home.</h2>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello! I'm Guilherme Wiener and welcome to my homepage!</h1>");
});

app.listen(3000, () => {
  console.log(`Express app listening on port ${port}`);
});
