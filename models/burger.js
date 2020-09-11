//import the ORM
const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', cb)
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, cb)
    },
    updateOne: function(id, cb) {
        orm.updateOne(id, cb)
    }
}

//export the databse functions for the controller
module.exports = burger;