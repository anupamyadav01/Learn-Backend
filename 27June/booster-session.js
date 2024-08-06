const bodyParser = require("body-parser");
const express = require("express");
const userRouter = require("./routes/users.routes");

const app = express();
const PORT = 8080;
const data = [];

app.use(bodyParser.json());

app.use("/users", userRouter);

// app.get("/", (req, res) => {
//   res.status(200).json(data);
// });

// app.post("/users", (req, res) => {
//   const bodyData = req.body;
//   data.push(bodyData);
//   return res.status(201).json({ message: "Data stored sucessfully" });
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
