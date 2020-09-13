// importing express router
const router = require("express").Router();
//importing model to use database functions
const burger = require("../models/burger.js");

//GET route main page
router.get("/", (req, res) => {
  burger.selectAll (function(err, result) {
    if (err) throw err;
    console.log(result)
    res.render("index", { allBurgers: result })
  })
});

//POST route
router.post("/api/burgers", (req, res) => {
  burger.insertOne(req.body.new_burger, function(data) {
    console.log(data);
    res.redirect("/")
  })
});
// UPDATE devoured route
router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, function(data){
    console.log(data);
    res.redirect("/")
  })});

module.exports = router;