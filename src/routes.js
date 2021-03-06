const express = require("express");
const router = express.Router();
const path = require("path");

const authController = require("./controllers/Auth");
const mainController = require("./controllers/Main");

router.get("/", authController.showLogin);
router.get("/login", authController.showLogin);
router.get("/login", authController.login);
router.get("/registro", authController.showRegister);
router.get("/home", mainController.showHome);
router.get("/publicar", mainController.showCreatePublication);
router.post("/cadastrar-usuario", authController.createRegister);

module.exports = router;
