const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/users") {
    res.write("this is users page");
    res.end();
  } else if (req.url == "/main") {
    res.setHeader("content-type", "text/html");
    res.write("<h1>welcome to main page</h1>");
    res.end();
  }
});

server.on("connection", () => {
  console.log("connected");
});

server.listen(3000);

console.log("waiting");
