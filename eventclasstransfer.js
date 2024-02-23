const Vlogger = require("./eventclass.js");

const vlogger = new Vlogger();

vlogger.on("mission accomplished", () => {
  console.log("good");
});

vlogger.blog("elephant");
vlogger.blog("tiger");
vlogger.flog("lion");

// also we can send more args

vlogger.on("mission", (arg1, arg2) => {
  console.log(arg1 + "" + arg2);
});

vlogger.on("flog", (data) => {
  console.log("id : " + data.id, "name : " + data.name);
});

vlogger.vlog("kingkong");
vlogger.flog("godzilla");
vlogger.vlog("ape");

// if multiple times raises from emit but we wnt only once at a time
//  means

// use "once" instead of "on"

vlogger.once("mission accomplished", () => {
  console.log("good");
});
