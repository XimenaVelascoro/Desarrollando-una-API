const express = require("express");
const router = express.Router()
//para leer el directorio
const  fs = require("fs");

const pathRouter = `${__dirname}` //hace ref a lo que esta dentro del directorio

const removeExtension = (fileName) => {
  return fileName.split (".").shift()
}


//lee desde el directorio en el que estoy pathRouter
fs.readdirSync(pathRouter).filter((file)=> {
  const fileWithoutExt = removeExtension(file)
  const skip = ["index"].includes(fileWithoutExt)//para saltar los file que sean index
  if (!skip){
    router.use(`/${fileWithoutExt}`, require(`./${fileWithoutExt}`)) //localhost/api
    //para que al generar una nueva familia de rutas simplemente se a de crear un file con el nombre
    //le digo a router que haga uso de
    console.log("LOADING RUTE---->", fileWithoutExt)
  }

})

router.get("*", (req,res) =>{
  req.status(404)
  res.send({error:"Not Found"})
})

module.exports = router
