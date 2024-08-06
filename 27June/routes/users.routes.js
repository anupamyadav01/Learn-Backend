const express = require("express");
const data = [];

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(200).json(data);
});

userRouter.post("/", (req, res) => {
  const bodyData = req.body;
  data.push(bodyData);
  return res.status(200).json({ message: "data stored successfully" });
});

module.exports = userRouter;
