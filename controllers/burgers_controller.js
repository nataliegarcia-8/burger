const router = require("express").Router();

//importing model to use database functions
const burger = require("../models/burger.js")

const connection = require('../config/connection')
const orm = require('../config/orm')

//GET route
router.get("/", (req, res) => {
  // burger.all(function (err, result) {
  //   if (err) throw err;
  //   console.log(result)
  //   res.render("index", { burgers: result })
  // })
  burger.find({})
    .then(function (result) {
      console.log(result)
      res.render("index", { burgers: result })
    })
    .catch(function (err) {
      if (err) throw err;
    })
});

router.get("/id/:id", (req, res) => {
  // burger.findById(req.params.id, function (err, result) {
  //   if (err) throw err;
  //   console.log(result)
  //   res.render("index", { burgers: result })
  // })
  burger.find({ id: req.params.id })
    .then(function (result) {
      console.log(result)
      res.render("index", { burgers: result })
    })
    .catch(function (err) {
      if (err) throw err;
    })
});

router.get("/name/:burger_name", (req, res) => {
  burger.findByName(req.params.burger_name, function (err, result) {
    if (err) throw err;
    console.log(result)
    res.render("index", { burgers: result })
  })
});

//POST route
router.post("/api/burgers", (req, res) => {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


module.exports = router