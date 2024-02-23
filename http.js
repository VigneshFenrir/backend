// in http has lots of classes so here we are going to use
// that object that is creating a new object

// like
//  const server = new Server()

// in Http.createserver has eventemmiter like accesss to .on .emit
// bcoz it all extended from that also net server

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(res.url);

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
// always use connection as parameter for .on

// here .emit is over writted by ".listen"

server.listen(3000);
console.log("waiting");

// there are three props

// in http.createserver => has call back fn tat is
//  http.createServer(()=>{})
//  also have
//  two props http.createServer((req,res)+>{

//    $ inside here we are using (if condition)  $

//  })

// to find the server req.url()
// in res its two METHODS
// ie. res. write("")for writing
// res.end()to end the process
