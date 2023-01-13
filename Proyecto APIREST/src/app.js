const express = require("express")();
const cors = require("cors");
const userRouter = require("./routers/user.routers");
const errorHandling = require("../src/error/errorHandlin");
const bodyParser = require("body-parser");
const libroRouter= require ("./routers/libros.routers")
const app = express;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", userRouter.router);
app.use("/", libroRouter.router)
app.use(function (req, res, next) {
  res.status(404).json({
    error: true,
    codigo: 404,
    message: "Endpoint doesnt found",
  });
  next();
});
app.use(errorHandling);
module.exports = app;
