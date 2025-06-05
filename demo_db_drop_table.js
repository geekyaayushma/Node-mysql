require("dotenv").config();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "mydb",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
  var sql = "DROP TABLE Students";
  //Delete the whole table
  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("Table deleted");
  });
});
