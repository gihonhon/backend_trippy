import express from "express";
import { createOrder, getOrder } from "../controllers/order.js";

const router = express.Router();

//Create
router.post("/:userid", createOrder);

// Get
router.get("/history/:id", getOrder)


export default router;