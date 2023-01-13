const { Router } = require("express");
const router = Router();
const userCtrl = require("../controller/libros.controller");

// router.getStart("", userCtrl.getStart);
// router.get("/libros", userCtrl.getLibros);
router.get("/libros", userCtrl.getLibros2);
router.post("/libros", userCtrl.postLibros);
router.put("/libros", userCtrl.putLibros);
router.delete("/libros", userCtrl.deleteLbros);



module.exports = {router} ;
