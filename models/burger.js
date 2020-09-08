//import the ORM
const orm = require("../config/orm.js");

const burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
     cb(res);
        });
    },
}

//export the databse functions for the controller
module.exports = burger;