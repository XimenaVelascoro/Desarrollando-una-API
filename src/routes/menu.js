const express =require("express");
//este express va a tener un constructor llamado router
const router = express.Router()
//para crear un enrutador, que es lo que voy a estar exportando de este archivo
const menuSchema = require("../models/menu")



//create menu funcion flecha (recibe el obj de la peticion y el objeto de la respuesta)
router.post("/menu", (req,res) =>{
  res.send("create menu");
});



//para luego usarlo en el servidor(las rutas se definen en archivos separados)
module.exports = router;

