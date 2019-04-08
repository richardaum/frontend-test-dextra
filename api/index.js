const express = require("express");
const cors = require("cors");
const endpoints = require("./endpoints");

const app = express();

app.use(cors());
app.use("/api", endpoints);

const server = app.listen(process.env.API_PORT || 3001, () => {
  console.log("Listening on port 3001");
});

process.on("SIGTERM", () => {
  server.close(() => {
    process.exit(0);
  });
});
