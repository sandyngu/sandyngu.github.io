const mysql = require('mysql')

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "nursimulator",
database:"portfolio" 
})

module.exports = db;