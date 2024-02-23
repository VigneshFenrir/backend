function app(lokie) {
  const abc = "hello";
  lokie + abc;
  console.log(abc, lokie);
}
const kar = () => {
  console.log("karthick");
};

console.log(app);

module.exports = app;
module.exports.kar = kar;
