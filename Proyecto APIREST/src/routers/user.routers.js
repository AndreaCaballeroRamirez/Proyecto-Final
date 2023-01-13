const { Router } = require("express");
const router = Router();
const userCtrl = require("../controller/user.controller");

router.get("", userCtrl.getStart);
router.post("/login", userCtrl.postLogin);
router.post("/register", userCtrl.postRegistrarse);

module.exports = { router };
