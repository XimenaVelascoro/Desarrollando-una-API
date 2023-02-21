const mongoose = require("mongoose");
//creo un nuevo schema para el modelo de datos del menu
const menuSchema = mongoose.Schema({
  day:{
    type: Number,
    require: true
  },
  proteina:{
    type: String,
    require:true
  },
  carbohidrato:{
    type: String,
    require: true
  },
  grasas:{
    type: String,
    require:true
  },
  verdura:{
    type:String,
    require:true
  }

})

module.exports = mongoose.model("menu", menuSchema);
//usando el obj mongoose el modelo del menu
//estamos exportando el modelo de datos de un tipo de menu
