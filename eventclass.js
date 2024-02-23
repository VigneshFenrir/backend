// now here we are goin to transfer one emit to another module

// lets start,

const EventEmitter = require("events");

// class Logger {}

// // in we not use function
// // like function data (){
// //                        }

// // unless using
// // data(){
// //       }

var success = "success in your lyf ";

// class blogger {
//   blog() {
//     console.log(success);
//   }
// }

// now extends eventemmiter

var data = {
  id: 302,
  name: "spiderman",
};

class Vlogger extends EventEmitter {
  blog(animal) {
    console.log(success + animal);
    this.emit("mission accomplished");
    this.emit("mission accomplished");
    this.emit("mission accomplished");
    this.emit("mission accomplished");
    this.emit("mission accomplished");
  }
  vlog(animal) {
    console.log(success + animal);
    this.emit("mission", "man", "female");
  }
  flog(animal) {
    console.log(success + animal);
    this.emit("flog", data);
  }
}

module.exports = Vlogger;
