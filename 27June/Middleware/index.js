const express = require("express");

const app = express();
const users = [
  {
    id: 1,
    name: "Anupam",
    age: 21,
  },
  {
    id: 2,
    name: "Jhon deo",
    age: 50,
  },
  {
    id: 3,
    name: "Jane doe",
    age: 35,
  },
];

const apiKeyMiddleWare = (req, res, next) => {
  const query = req.query;
  if (req.query.apiKey === "1234ab") {
    next();
  } else {
    res.status(403).json({
      sucess: false,
      message: "Please pass an API key",
    });
  }
};

app.use(apiKeyMiddleWare);
const m1 = (req, res, next) => {
  console.log("M1 API called");
  next();
  //   res.json({
  //     message: "Response from M1",
  //   });
};
const m2 = (req, res, next) => {
  console.log("M2 API called");
  next();
  //   res.json({
  //     message: "Response from M2",
  //   });
};
const m3 = (req, res, next) => {
  console.log("M3 API called");
  next();
  //   res.json({
  //     message: "Response from M3",
  //   });
};

app.get("/login", (req, res) => {
  res.json({
    sucess: true,
    message: "Login API called.",
  });
});

// app.use(m1);
// app.use(m2);
// app.use(m3);

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = users.find((item) => item.id == id);
  if (data) {
    res.json({
      message: true,
      results: data,
    });
  }
  if (!data) {
    res.json({
      sucess: true,
      message: "User API called.",
      results: users,
    });
  }
});

app.listen("8080", () => {
  console.log("Server is running");
});
