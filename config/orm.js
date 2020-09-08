//import MySQL connection
const connection = require("./connection.js")

const orm = {
    selectAll: (whatToSelect, table, orderCol) => {
        const queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
   insertOne: () {
    
   },
   updateOne: () {

   },
}

module.exports = orm;