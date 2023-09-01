const express = require("express")
const app = express();
const PORT = 3000;



const mongoose = require("mongoose");
require("dotenv").config();



const Pokemon = require("./models/pokes.js");




//--------MiddleWear------

app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());

app.use((req,res, next) => {
  console.log("Route is running");
  next();
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: "true",
  useUnifiedTopology: "true",
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});


// Index
app.get("/pokes", (req, res) => {
  Pokemon.find({}).then((allPokemon) => {
    res.render("Index", {
      pokes: allPokemon,
    });
  });
});


  app.post("/pokes", async (req, res) => {
    const newPokemon = await Pokemon.create(req.body);
    await res.send(newPokemon);
    console.log(pokes);
    res.redirect("/pokes");
  });

  //POST------
  app.get("/pokemon/new", (req, res) => {
    res.render("New");
  });


  // app.get("/pokemon/:id", aysnc (req, res) => {
  //   const eachPokemon = await Pokemon.findbyId(req.params.id),
  //   await res.render("Show",{
  //     pokes: eachPokemon
  //   })
  // });









// Show Each Pokemon
app.listen(PORT, (req, res) => {
    console.log(`Welcome to the Pokemon App!`);
  });
  