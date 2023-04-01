import mongoose from "mongoose";

const TickerSchema = mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  lastPrice: {
    type: String,
    required: true,
  },
  volume: {
    type: String,
    required: true,
  },
  bidPrice: {
    type: String,
    required: true,
  },
  askPrice: {
    type: String,
    required: true,
  },
  baseAsset: {
    type: String,
    required: true,
  },
});

export const Ticker = mongoose.model("Ticker", TickerSchema);
