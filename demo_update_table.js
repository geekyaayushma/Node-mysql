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

  var sql = "UPDATE Students SET address = 'Palpa' WHERE address = 'Portugal'";

  connection.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log("Updated rows: " + result.affectedRows);
  });
});
