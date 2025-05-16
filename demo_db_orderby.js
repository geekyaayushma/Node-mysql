require.('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection.connection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : 'mydb'
});

connection.connect(function(err){
    if (err) throw err;
    console.log('Connected');
    const sql = "SELECT * FROM CUSTOMERS ORDER BY name";
    connection.query(sql, function(err, result){
        if (err) throw err;
        console.log(result);
    });
});