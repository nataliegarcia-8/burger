//import MySQL connection
const connection = require("./connection.js")

const orm = {
    all: function (table, callback) {
        const q = 'SELECT * FROM ??'
        const data = [table]
        connection.query(q, data, callback)
    },
    findBy: function (table, condition, callback) {
        const q = 'SELECT * FROM ?? WHERE ' + condition;
        const data = [table]
        connection.query(q, data, callback)
    },
    selectAll: (whatToSelect, table, orderCol) => {
        const queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: (table, objValues, callback) => {
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
        const q = 'INSERT INTO ?? \
                    ('+ Object.keys(objValues).toString() + ') \
                    VALUES ('+ Object.keys(objValues).map(x => '?').toString() + ')'

        /*
        q = 'INSERT INTO ?? (burger_name, devoured) VALUES (?,?)
        data = ['burgers'].concat(['Cheeseburger', 0])
        data = ['burgers', 'Cheeseburger', 0)
        */
        const data = [table].concat(Object.values(objValues))
        connection.query(q, data, callback)
    },
    updateOne: () => {

    },
}

module.exports = orm;