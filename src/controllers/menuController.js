const getAllMenu = (req, res) => {
  res.send({ list: [1, 2, 3] });
};

const getOneMenu = (req, res) => {};

const createdMenu = (req, res) => {};

const updateMenu = (req, res) => {};

const deleteMenu = (req, res) => {};

module.exports = {
  getAllMenu,
  getOneMenu,
  createdMenu,
  updateMenu,
  deleteMenu,
};
//const menuServices = require("../services/menuServices");

/*
const getAllMenu = (req,res) =>{
  const allMenu = menuServices.getAllMenu();
  res.send({status: "ok", data: allMenu});
};


const getOneMenu = (req, res) =>{
  const menu = menuServices.getOneMenu(req.params.menuId);
  res.send(`Get menu ${req.params.menuId}`)
};

const createNewMenu = (req,res) => {
  const {body} = req;

  if (
    !body.dia ||
    !body.proteina ||
    !body.carbohidratos ||
    !body.grasas ||
    !body.verdura ||
  )
   {
    return
  }

  const newMenu = {
    dia: body.dia,
    proteina: body.proteina,
    carbohidratos: body.carbohidratos,
    grasas: body.grasas,
    verdura: body.verdura
  };

  const createdMenu = menuServices.createNewMenu(newMenu);
  res.status(201).send({status: "ok", data: createdMenu});


}
*/
