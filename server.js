const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("hellow from server");
});

// const dotenv = require("dotenv").config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App start at Port : ${PORT}`);
});
