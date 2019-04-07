const { Router } = require("express");
const values = require("./values");

const burgers = new Router();

burgers.get("/", (req, res) => {
  res.send(values);
});

module.exports = ["/ingredients", burgers];
