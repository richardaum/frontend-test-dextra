const { Router } = require("express");
const burgers = require("./burgers");
const ingredients = require("./ingredients");

const router = new Router();
router.use(...burgers);
router.use(...ingredients);

module.exports = router;
