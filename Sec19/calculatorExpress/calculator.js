const { application } = require("express");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var sum = num1 + num2;

  res.send(`The sum of the numbers is ${sum}`);
});

app.listen(3000, () => {
  console.log(`Listening on port ${port}`);
});
