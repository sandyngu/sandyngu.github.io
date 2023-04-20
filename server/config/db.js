const mysql = require('mysql')

const db = mysql.createConnection({
    host: "us-cdbr-east-03.cleardb.com",
    user: "b911971ebfbaf9",
    password: "7bb3e434",
    database:"heroku_807fc0f12377da7" 
    })

module.exports = db;