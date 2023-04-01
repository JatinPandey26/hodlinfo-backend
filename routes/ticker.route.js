import express from "express";
import {
  createTicker,
  deleteTickers,
  getTickers,
} from "../controllers/ticker.controller.js";

const router = express.Router();

router.route("/").post(deleteTickers, createTicker).get(getTickers);

export { router as TickerRouter };
