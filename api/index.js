const express = require("express");
const endpoints = require("./endpoints");

const app = express();

app.use("/api", endpoints);

app.listen(process.env.API_PORT || 3001, () => {
  console.log("Listening on port 3001");
});
