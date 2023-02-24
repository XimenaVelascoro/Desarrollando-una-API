const express = require('express');
//este express va a tener un constructor llamado router y asi  usar el manejador de las rutas
const router = express.Router();
//para crear un enrutador, que es lo que voy a estar exportando de este archivo

//se inyecta un middeleware


const {getAllMenu} = require("../controllers/menuController");
const {getOneMenu} = require("../controllers/menuController");
const {createdMenu} = require("../controllers/menuController");
const {updateMenu} = require("../controllers/menuController");
const {deleteMenu} = require("../controllers/menuController");

//http:////http://localhost/api/1.0/menu----> LISTA
//apiporque es el nombre de mi archiVO

router.get("/", getAllMenu)


//http:////http://localhost/api/:id ----> DETALLE
router.get("/:id",  getOneMenu)


//con una prueba verificamos que se muestre el cambio en postman en la consola de visual y SI
router.post("/", createdMenu)



router.patch("/:id", updateMenu)



router.delete("/:id", deleteMenu)



module.exports = router;

