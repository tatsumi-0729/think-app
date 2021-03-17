const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const firebase = require("firebase");
const getThemeDocRef = require("../api/lib/firebase");
const Theme = require("../api/types/theme");

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
  const docRef = await getThemeDocRef();
  const newTheme = {
    theme: req.body,
    createdAt: firebase.firestore.Timestamp.now(),
  } as Theme;
  await docRef.set(newTheme);
  res.status(200).send(req.body);
});

app.listen(8080);
