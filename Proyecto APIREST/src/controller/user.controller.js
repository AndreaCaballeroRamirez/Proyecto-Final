const connection = require("../database");

function getStart(request, response) {
  let respuesta = { error: false, codigo: 200, mensaje: "Punto de inicio" };
  response.send(respuesta);
}

// function getUsuario (request,response){
//     let sql;
//     if (request.query.id==null){
//         sql = "SELECT * FROM usuarios";
//     }
//     else {
//         sql = "SELECT *FROM usuarios WHERE Id_usuarios="+ request.query.id;
//     }

// } PREGUNTAAAA

function postRegistrarse(request, response) {
  console.log(request.body);
  let sql =
    "INSERT INTO usuarios (nombre, apellidos, correo, url, password)" +
    "VALUES ('" +
    request.body.nombre +
    "','" +
    request.body.apellidos +
    "','" +
    request.body.correo +
    "','" +
    request.body.url +
    "','" +
    request.body.password +
    "')";
  console.log(sql);
  connection.query(sql, function (err, result) {
    if (err) console.log(err);
    else {
      console.log(result);
      if (result.insertId) response.send(String(result.insertId));
      else response.send("-1");
    }
  });
}

function postLogin(request, response) {
  console.log(request.body);
  const body = request.body;
  let sql =
    "SELECT * FROM usuarios WHERE usuarios.correo = '" +
    body.correo +
    "' AND usuarios.password = '" +
    body.password +
    "'";
  console.log(sql);
  connection.query(sql, function (err, result) {
    if (err) console.log(err);
    else {
      console.log(result);
      if (result[0] && result[0].Id_usuarios) response.send(String(result[0].Id_usuarios));
      else response.send("-1");
    }
  });
}
module.exports = { postRegistrarse, postLogin, getStart };
