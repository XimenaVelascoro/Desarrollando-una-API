const express = require("express");
const app = express();
const port = 3000
//response es la respuesta que le daremos al usuario
//require es lo que recoguemos del usuario
app.get("/", (req,res)=>{
  res.send("Hola Mundo ")
})
// la puerta ya esta abierta y vemos que esta detras de la puerta



//el navegadorsepa que esa es  la puerta que va a empezar a mirar
app.listen(port, ()=>{
  console.log("Mi puerto es " + port)
})
