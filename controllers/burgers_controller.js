const router = require("express").Router();
//importing model to use database functions
const burger = require("../models/burger.js");

// const connection = require('../config/connection')
// const orm = require('../config/orm')

//GET route main page
router.get("/", (req, res) => {
  burger.selectAll (function(err, result) {
    if (err) throw err;
    console.log(result)
    res.render("index", { burgers: result })
  })
});

//POST route
router.post("/api/burgers", (req, res) => {
  // burger.insertOne([
  //   "burger_name", "devoured"
  // ], [
  //   req.body.burger_name, req.body.devoured
  // ], (result) => {
  //   // Send back the ID of the new quote
  //   res.json({ id: result.insertId });
  // });
  burger.insertOne(req.body.new_burger, function(data) {
    console.log(data);
    res.redirect("/")
  })
});
// UPDATE
router.put("/api/burgers/:id", (req, res) => {
  burger.updateOne(req.params.id, function(data){
    console.log(data);
    res.redirect("/")
  })});


module.exports = router;