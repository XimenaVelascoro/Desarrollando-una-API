const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//require("dotenv").config();
const menuRoutes = require("./routes/menu");
const app = express();
const port = 3000
//response es la respuesta que le daremos al usuario
//require es lo que recoguemos del usuario

app.use (express.json());
//para que en las pruebas con postman no me salga error 500

//middleware (prefijo)api va a ser la base de todas mis rutas
app.use("/src/controllers/menuController.js", menuRoutes);



//routes (obj re peticion y obj de respuesta)
app.get("/", (req,res)=>{
  res.send("Welcome to my API  ")
})
// la puerta ya esta abierta y vemos que esta detras de la puerta

mongoose.set("strictQuery", false)// para desactivar la opción strictQuery ya que esta en deshuso***

//mongodb conection
mongoose.connect(
  "mongodb+srv://miAPI:Wn7t4RCKTXrcS4UB@cluster0.q8k7itt.mongodb.net/NutriLunch?retryWrites=true&w=majority")
  .then(()=> console.log("connected to mongodb atlas"))
  .catch((error) => console.error("error"));
//Una promesa para ver que todo salga bn con la conexion
//y catch para tratar algun error


//esto siguiente es para que el navegadorsepa que esa es  la puerta que va a empezar a mirar
app.listen(port, ()=>{
  console.log("Mi puerto es " + port)
})
