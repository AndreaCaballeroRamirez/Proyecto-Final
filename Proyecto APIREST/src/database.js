const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mangeles1",
  database: "usuarios",
});

connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Conexión correcta");
  }
});

module.exports = connection;
