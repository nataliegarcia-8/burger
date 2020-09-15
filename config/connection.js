//set up mySQL connection
const mysql = require("mysql");
const connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "codeme10",
    database: "burgers_db"
})};

//make the connection
connection.connect (err => {
if (err) {
    console.log("error connecting: " + err.stack);
    return;
}
console.log("connected as id " + connection.threadId)
});
// export connection to use for ORM
module.exports = connection;
