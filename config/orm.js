//import MySQL connection
const connection = require("./connection.js")

const orm = {
    selectAll: function (table, callback) {
        const q = 'SELECT * FROM ??'
        const data = [table]
        connection.query(q, data, callback)
    },
    insertOne: (new_burger, callback) => {
        const q = "INSERT INTO burgers (new_burger, devoured) VALUES (?, false)";
        connection.query(q, [new_burger], callback)
        },
    updateOne: function(id, callback) {
        const q = 'UPDATE burgers SET devoured = true WHERE id = ?'
        connection.query(q, [id], callback)
        
        // var queryString = 'UPDATE' + table 
        // queryString += ' SET '
        // queryString += objectCv
        // queryString += ' WHERE '
        // queryString += condition
        // console.log(queryString)
        // // const q = 'UPDATE burgers SET devoured = 1 WHERE condition = ?'
        // connection.query(queryString, function(err, result) {
        //     if(err) {
        //         throw err
        //     }
        //     callback(result)
        // })
        // console.log(id)
    }
}

module.exports = orm;