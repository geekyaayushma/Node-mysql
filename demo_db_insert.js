import("dotenv").config();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  database: "mydb",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "INSERT INTO customers (name,adress) VALUES ('Aayushma' , 'Sarlahi')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Inserted into table");
  });
});
