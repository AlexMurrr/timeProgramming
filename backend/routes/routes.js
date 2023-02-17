import express from "express";

import {showTime} from "../controllers/time.js";

const router = express.Router();

router.get("/new", showTime);

export default router;