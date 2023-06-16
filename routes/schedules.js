import express from "express";
import { createSchedule, getSchedule, getSchedules } from "../controllers/schedule.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/", createSchedule);

//UPDATE

//DELETE

//GET
router.get('/find/:id', getSchedule)
router.get("/search", getSchedules)

//GET ALL



export default router;
