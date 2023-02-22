const express = require('express');
//const mimenu = require('../models/mimenu');
//este express va a tener un constructor llamado router
const router = express.Router();
//para crear un enrutador, que es lo que voy a estar exportando de este archivo
//const menuSchema = require('../models/menu');
const menuControllers = require("../controllers/menuController");
/*
router
   .get("/", menuController.getAllMenu)
   .get("/:menuId", menuController.getOneMenu)
   .post("/", menuController.createNewMenu)
   .patch("/:menuId", menuController.updateOneMenu)
   .delete("/:menuId", menuController.deleteMenu)
*/
//create user
router.post('/menu', (req, res) => {
  const menu = menuSchema(req.body);
  /*esto nos va a crear un nuevo menu con los datos que estan llegando desde el cuerpo(body) de la peticion (req) que va a traer los datos, esta constante me va a devolver el menu que creo*/
  menu
    .save()/*para guardar en la base de datos */
    .then((data) => res.json(data))//si sale todo bien responde con esos datos
    .catch((error) => res.json({ message: error }));//y si no me muestra los datos me muestra con un mensaje de error
  /*para guardarlo en la bd tenemos que usar ese obj y el metodo save que guarda ese menu en la db .then me retorna una promesa, para saber su guarda algun dato que responda con esos datos y hasta le puedo pedir un mensja en consolatipo: se a creado un nuevo menu y con .catch  me res con un obj que puede mostrarme el err */
});

//obtener los usuarios
router.get('/menu', (req,res)=>{
  menuSchema
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))
})

module.exports = router;
