//import the ORM
const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.all('burgers', cb)
    },
    find: function (obj) {
        return new Promise(function(resolve, reject){
            const cond = Object
                .entries(obj)
                .map(([key, value]) => key + "=" + value)
                .join(" AND ") || 'true'
    
            console.log(cond)
    
            orm.findBy('burgers', cond, function(err, result){
                if(err) return reject(err)

                resolve(result)
            })
        })
    },
    findByName: function (name, cb) {
        const cond = 'burger_name = \'' + name + '\''
        orm.findBy('burgers', cond, cb)
    },
    findById: function (id, cb) {
        const cond = 'id = ' + id
        orm.findBy('burgers', cond, cb)
    }
}

//export the databse functions for the controller
module.exports = burger;