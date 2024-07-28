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

app.get("/login", (req, res) => {
  //   res.send("Login API called");
  res.json({
    sucess: true,
    message: "Login API called",
  });
});

app.post("/login", (req, res) => {
  res.json({
    sucess: true,
    message: "Login POST API called",
  });
});

// these are the URL parameters
app.post("/users/:id", (req, res) => {
  const params = req.params;
  //   console.log(params.id)
  const user = users.find((user) => user.id == params.id);

  if (user) {
    res.json({
      sucess: true,
      message: "Users List POST API called",
      results: user,
    });
  } else {
    res.status(404).json({
      sucess: true,
      message: "User not found",
    });
  }
});

app.get("/user", (req, res) => {
  const query = req.query;
  const params = req.params;
  if (!params.id) {
    res.json({
      sucess: true,
      results: users,
    });
  }
  res.json({
    sucess: true,
    message: "Users List GET API called",
    results: query,
  });
  console.log(query);
});

// these are query parameter
// single query parameter
// http://localhost:8080/users?id=1

// multiple query parameter
// http://localhost:8080/users?id=1&name=Anupam
app.post("/users", (req, res) => {
  const query = req.query;
  //   console.log(query);
});

app.listen("8080", () => {
  console.log("Server is running on port 8080");
});
