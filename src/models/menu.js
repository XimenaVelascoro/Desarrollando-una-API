const mongoose = require('mongoose');
//creo un nuevo schema para el modelo de datos del menu
//Con el schema le estoy diciendo a mongo cual es la estructura de datos que va a contener
const menuSchema = new mongoose.Schema(
  {
    dia: {
      type: Number,
      require: true,
    },
    proteina: {
      type: String,
      require: true,
    },
    carbohidrato: {
      type: String,
      require: true,
    },
    grasas: {
      type: String,
      require: true,
    },
    verdura: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('menu', menuSchema);
//usando el obj mongoose el modelo del menu
//estamos exportando el modelo de datos de un tipo de menu
