const express = require("express");
const time = require("../controllers/time.js");

const showTime = time.showTime;
const index = time.sendIndex;
const router = express.Router();
router.get("/new", showTime);
router.get("/", index);



module.exports = router;