require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createconnection(
    host = process.env.DB_HOST;
    user = process.env.DB_USER;
    password = process.env.DB_PASSWORD;

);


connection.connect(funrtion(err){
    if (err) throw err;
    console.log("Connected!");
    var sql 
    connection.query("INSERT")
    if (err) throw err;
       
})