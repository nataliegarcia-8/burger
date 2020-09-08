const express = require("express");
const router = express.Router();

//importing model to use database functions
const burger = require("../models/burger.js")

//GET route
router.get("/", (req, res) => {
    burger.all((data) => {
const hbsObject = {
    burgers: data
};
console.log(hbsObject);
res.render("index", hbsObject);
    });
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
