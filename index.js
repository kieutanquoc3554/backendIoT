const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

let temperature;
let humidity;

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server dang chay");
});

app.post("/update", (req, res) => {
  temperature = req.body.temperature;
  humidity = req.body.humidity;
  res.status(201).json({ temperature, humidity });
});

app.get("/data", (req, res) => {
  res.json({ temperature, humidity });
  //   console.log({ temperature, humidity });
});

app.listen(3000, () => {
  console.log("Server dang chay tren cong: 3000");
});
