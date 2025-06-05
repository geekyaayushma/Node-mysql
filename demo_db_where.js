require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "mydb",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
  var sql = "SELECT * FROM Students WHERE address = 'Sarlahi'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
