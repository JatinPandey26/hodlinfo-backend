import { Ticker } from "../models/ticker.model.js";

export const createTicker = async (req, res, next) => {
  try {
    const { data } = req.body;
    for (let i = 0; i < data.length; i++) {
      await Ticker.create(data[i]);
    }

    res.status(200).send("tickers created successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteTickers = async (req, res, next) => {
  try {
    await Ticker.deleteMany({});
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getTickers = async (req, res, next) => {
  try {
    const tickers = await Ticker.find({});
    res.status(200).send(tickers);
  } catch (error) {
    res.status(500).send(error);
  }
};
