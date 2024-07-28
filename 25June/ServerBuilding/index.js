const http = require("http");
const myServer = (req, res) => {
  console.log("request recieved");
  //   console.log(req.url);
  //   res.end("Hello Node.js");

  //   const response = {
  //     sucess: true,
  //     message: "API called successfully.",
  //   };
  if (req.url === "/") {
    res.end("API home page");
  } else if (req.url === "/login") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    if (req.method === "GET") {
      res.end(
        JSON.stringify({
          sucess: true,
          message: "Login GET API called",
        })
      );
    } else if (req.method === "POST") {
      res.end(
        JSON.stringify({
          sucess: true,
          message: "Login POST API called",
        })
      );
    }
  } else if (req.url === "/users") {
    res.end("User API called");
  } else {
    // res.end("no api matching ");
    res.writeHead(404);
    res.end(
      JSON.stringify({
        sucess: false,
        message: "Route not found",
      })
    );
  }
};
const server = http.createServer(myServer);

server.listen("8080", () => {
  console.log("Server is running ");
});
