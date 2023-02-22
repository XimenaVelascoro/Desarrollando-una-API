const express = require('express');
//const mimenu = require('../models/mimenu');
//este express va a tener un constructor llamado router y asi  usar el manejador de las rutas
const router = express.Router();
//para crear un enrutador, que es lo que voy a estar exportando de este archivo
//const menuSchema = require('../models/menu');
const {getAllMenu} = require("../controllers/menuController");
const {getOneMenu} = require("../controllers/menuController");
const {createdMenu} = require("../controllers/menuController");
const {updateMenu} = require("../controllers/menuController");
const {deleteMenu} = require("../controllers/menuController");


router.get("/", getAllMenu)



router.get("/:id", getOneMenu)



router.post("/", createdMenu)



router.patch("/:id", updateMenu)



router.patch("/:id", deleteMenu)



module.exports = router;
