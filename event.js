// events
// now 3 things require event then create new Object() thirly,

// raise .emit()which is used in only for acces it has no function like console.log

// which .on has .on("name of event",()=>{})and call back function

const EventEmitter = require("events");

const event = new EventEmitter();

event.emit("message logged in");

event.on("message logged in", () => {
  console.log("success");
});
event.emit("message logged in");
// here only after the .on it will work
