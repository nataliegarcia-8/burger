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
    // insertOne: (table, objValues, callback) => {
        /*
        var objValues = {
            burger_name: 'Cheeseburger',
            devoured: false
        }
        Object.keys(objValues) === ['burger_name', 'devoured']
        Object.values(objValues) === ['Cheeseburger', 'false']

        ['burger_name', 'devoured'].map(x => '?') === ['?', '?']
        ['?', '?'].toString() === '?,?'
        */
        // const q = 'INSERT INTO ?? \
        //             ('+ Object.keys(objValues).toString() + ') \
        //             VALUES ('+ Object.keys(objValues).map(x => '?').toString() + ')'

        /*
        q = 'INSERT INTO ?? (burger_name, devoured) VALUES (?,?)
        data = ['burgers'].concat(['Cheeseburger', 0])
        data = ['burgers', 'Cheeseburger', 0)
        */
        // const data = [table].concat(Object.values(objValues))
        // connection.query(q, data, callback)
    updateOne: (id, callback) => {
        const q = 'UPDATE burgers SET devoured = true WHERE id = ?'
        connection.query(q, [id], callback)
    }
}

module.exports = orm;