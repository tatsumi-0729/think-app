const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.status(200).send("http ok!!");
});

app.post("/register", async function (req, res) {
  res.status(200).send(req.body);
});

app.listen(8080);
