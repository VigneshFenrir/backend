const fs = require("fs");
// fs;
// syncchronous

console.log(fs.readdirSync("/Users/vigne/Downloads/web_development/"));
console.log(fs.readdirSync("/"));

// console.log(fs.readdirSync);
// asyncccc

const file = fs.readdir(
  "/Users/vigne/Downloads/web_development/backend",
  (res, err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  }
);
fs;
