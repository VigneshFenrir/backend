// here express is function

const xpress = require("express");

const joi = require("joi");
// console.log(joi);
const scehma = joi.object({
  movies: joi.string().min(3).required(),
  director: joi.string().min(3).required(),
  hero: joi.string().min(3).required(),
  musicdirector: joi.string().min(3).required(),
  producer: joi.string().min(3).required(),
});
// here express is function ,so we have to included in app

const app = xpress();
const tittle = [
  {
    id: "1",
    movies: "vtv",
    director: "gvm",
    hero: "str",
    musicdirector: "arr",
    producer: "vtv ganesh",
  },
  {
    id: "2",
    movies: "thotti jaya",
    director: "simbu",
    hero: "80",
    musicdirector: "gv.prakash",
    producer: "vignesh",
  },
  {
    id: "3",
    movies: "valok",
    director: "gvm",
    hero: "ghost",
    musicdirector: "sams jr",
    producer: "thomas",
  },
  {
    id: "4",
    movies: "nun",
    director: "stanley",
    hero: "vampire",
    musicdirector: "david",
    producer: "spiderman",
  },
  {
    id: "5",
    movies: "aiyarthil oruvan",
    director: "selvaragavan",
    hero: "karthi",
    musicdirector: "gv.prakash",
    producer: "alien",
  },
];

/**its have a bunch of method process like
 * app.put()
 * app.delete()
 * app.post()
 * app.get()
 *
 *
 * inside app.get("/",()=>{}) =>> pass the url in strings
 *
 * in http we enter httpcreate((req,res)=>{
 *   re.write & res.end
 * })
 *
 * here juzt access app.get("/",(req,res)=>{
 * res.send("")
 * })
 */

app.get("/", (req, res) => {
  res.send("<h1>hi..hello...vanakkammmm</h1>");
});

app.get("/vignesh/movieslist", (req, res) => {
  res.send(tittle);
});

app.get("/vignesh/movieslist/:id", (req, res) => {
  //   `id ${res.send(req.params.id)}`;

  //by using array.find() method access the particular id's

  const tittleId = req.params.id;

  // console.log(req.params.name);

  const myTittle = tittle.find((t) => t.id == tittleId);

  if (!myTittle) res.status(404).send("<h1>laip ah tholachita  broooo</h1>");

  res.send(myTittle);
});
app.use(xpress.json());

app.post("/vignesh/movieslist", (req, res) => {
  // in xpress we use xpress.json for acesssing the post updates from raw data

  console.log(req.body.director);

  // if (!req.body.director || req.body.director.length < 3) {
  //   res.status(402).send("body name invalid or less than 3");
  // }
  // if (!req.body.movies || req.body.movies.length < 10) {
  //   res.status(402).send("body name invalid or less than 3");
  // }
  const result = scehma.validate(req.body);

  if (result.error) {
    res.status(404).send(result.error.details[0].message);
    // console.log(result.error.details[0].message);
    return;
  }

  console.log("aftererror");

  const myTittle = {
    id: tittle.length + 1,
    movies: req.body.movies,
    hero: req.body.hero,
    director: req.body.director,
    musicdirector: req.body.musicdirector,
    producer: req.body.producer,
  };

  tittle.push(myTittle);

  res.send(myTittle);
});

app.put("/vignesh/movieslist/:id", (req, res) => {
  const tittleId = parseInt(req.params.id);
  const myTittle = tittle.find((t) => t.id == tittleId);

  if (!myTittle) res.status(404).send("id are not same");

  const result = scehma.validate(req.body);
  if (result.error) {
    res.status(404).send(result.error.details[0].message);
  }
  myTittle.movies = req.body.movies;
  myTittle.hero = req.body.hero;
  myTittle.musicdirector = req.body.musicdirector;
  myTittle.director = req.body.director;
  myTittle.musicdirector = req.body.musicdirector;

  res.send(myTittle);
});
app.delete("/vignesh/movieslist/:id", (req, res) => {
  const tittleId = parseInt(req.params.id);
  const myTittle = tittle.find((t) => t.id == tittleId);
  let index = tittle.indexOf(myTittle);
  tittle.splice(index, 1);
  // const result = scehma.validate(req.body);
  // if (result.error) res.status(404).send(result.error.details[0].message);
  res.send(myTittle);
});
console.log("hii");

const port = process.env.port || 3000;

/**                                   importtant                           */

//query selector "api/course?(sortby=name)" ----1
// that sortby is written as {sortby= name} ----2
// by using req.query gives --1
//by req.query.sortby givesv= names

/**                                   importtant                           */

app.listen(port, () => {
  console.log("express engine starts");
  console.log(port);
});
