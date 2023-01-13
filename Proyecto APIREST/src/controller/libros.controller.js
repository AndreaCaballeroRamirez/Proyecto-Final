const connection = require("../database");

// function getStart(request, response) {
//     let respuesta = { error: false, codigo: 200, mensaje: "Punto de inicio" };
//     response.send(respuesta);
//   }

//   function getLibros (request,response){
//     let sql;

//     sql= "SELECT * FROM libros WHERE id_usuario=" + request.query.id;

//     connection.query (sql, function(err,result){
//         if (err)
//         console.log(err);
//         else
//         console.log(result)
//         response.send(result)
//     })
// };
//tbm se me ocurre un join pero no me acuerdo de hacerlo :'(

function getLibros2(request, response) {
  let sql;
  if (request.query && request.query.id) {
    if (request.query.id_libro)
      sql =
        "SELECT * FROM libros WHERE id_usuario=" +
        request.query.id +
        " AND id_Libros=" +
        request.query.id_libro;
    else sql = "SELECT * FROM libros WHERE id_usuario=" + request.query.id;

    connection.query(sql, function (err, result) {
      if (err) console.log(err);
      else console.log(result);
      response.send(result);
    });
  } else {
    response.send({ msg: "falta id" });
  }
}

function postLibros(request, response) {
  console.log(request.body);
  let sql =
    "INSERT INTO libros ( id_usuario, titulo, tipoLibro, autor, precio, photo)" +
    "VALUES ('" +
    request.body.id_usuario +
    "','" +
    request.body.titulo +
    "','" +
    request.body.tipoLibro +
    "','" +
    request.body.autor +
    "','" +
    request.body.precio +
    "','" +
    request.body.photo +
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

function putLibros(request, response) {
  console.log(request.body.id_libro);
  let sql = `UPDATE libros SET titulo="${request.body.titulo}", tipoLibro="${request.body.tipoLibro}", autor="${request.body.autor}",precio=${request.body.precio}, photo="${request.body.photo}" WHERE id_Libros=${request.body.id_libro}`;

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

function deleteLbros(request, response) {
  let sql;
  if (request.query.id_libro) {
    sql = "DELETE FROM libros WHERE id_Libros = " + request.query.id_libro;
  }
  connection.query(sql, function (err, result) {
    if (err) console.log(err);
    else {
        console.log(result);
        response.send({msg: "Libro eliminado"});
    }
  });

}
module.exports = { getLibros2, postLibros, putLibros, deleteLbros };
