//import MySQL connection
const connection = require("./connection.js")

const orm = {
    selectAll: function (table, callback) {
        const q = 'SELECT * FROM ??'
        const data = [table]
        connection.query(q, data, callback)
    },
   
    insertOne: (new_burger, callback) => {
        const q = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
        connection.query(q, [new_burger], callback)
        },
    updateOne: (id, callback) => {
        const q = 'UPDATE burgers SET devoured = true WHERE id = ?'
        connection.query(q, [id], callback)
    }
}

module.exports = orm;