import express from "express";
import dotenv from "dotenv";
import { TickerRouter } from "./routes/ticker.route.js";
import cors from "cors";
import { connectDatabase } from "./database.js";
dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND,
  })
);

connectDatabase();

// routes
app.use("/tickers", TickerRouter);

app.listen(process.env.PORT, () => {
  console.log("server listening on " + process.env.PORT);
});
