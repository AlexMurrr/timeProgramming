const express = require("express");

const time = require("../controllers/time.js");
const showTime = time.showTime;

const router = express.Router();

router.get("/new", showTime);

module.exports = router;