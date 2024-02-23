// here express is function

const xpress = require("express");

// here express is function ,so we have to included in app

const app = xpress();
const tittle = [
  {
    id: "1",
    tamilmovies: "125",
    englishMovies: "200",
    koreanMovies: "80",
    teluguMovies: "345",
    malayalamMovies: "222",
  },
  {
    id: "2",
    tamilmovies: "125",
    englishMovies: "200",
    koreanMovies: "80",
    teluguMovies: "345",
    malayalamMovies: "222",
  },
  {
    id: "3",
    tamilmovies: "125",
    englishMovies: "200",
    koreanMovies: "80",
    teluguMovies: "345",
    malayalamMovies: "222",
  },
  {
    id: "4",
    tamilmovies: "125",
    englishMovies: "200",
    koreanMovies: "80",
    teluguMovies: "345",
    malayalamMovies: "222",
  },
  {
    id: "5",
    tamilmovies: "125",
    englishMovies: "200",
    koreanMovies: "80",
    teluguMovies: "345",
    malayalamMovies: "222",
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
  console.log(req.body.englishMovies);
  if (!req.body.englishMovies || req.body.englishMovies.length < 10) {
    res.status(402).send("body name invalid or less than 3");
  }
  const myTittle = {
    id: tittle.length + 1,
    // tamilmovies: req.body.tamilmovies,
    englishMovies: req.body.englishMovies,
  };

  tittle.push(myTittle);

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
