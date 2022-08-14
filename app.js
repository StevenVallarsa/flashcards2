const express = require("express");
const port = 3000;
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h1>I Am Here</h1>");
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello JavaScript Guru!</h1>");
});

app.listen(port, () => {
  console.log(`The application is running on port ${port}`);
});
