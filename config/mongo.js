const mongoose = require("mongoose");

const dbConnect = ()  => {
  // en este archivo deberia ir la conexion de la base de datos con el back
   mongoose.connect("mongodb+srv://miAPI:Wn7t4RCKTXrcS4UB@cluster0.q8k7itt.mongodb.net/NutriLunch?retryWrites=true&w=majority")
       .then(()=> console.log("connected to mongodb atlas"))
       .catch((error) => console.error("error"));
//Una promesa para ver que todo salga bn con la conexion
//y catch para tratar algun error
}

module.exports = {dbConnect}
