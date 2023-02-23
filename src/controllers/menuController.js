const {httpError} = require("../helpers/handleError");
const menuModel = require("../models/menu")

const getAllMenu = async (req, res) => {
  try{
    const listAll = await menuModel.find({})
    res.send({data: listAll })
  } catch(e) {
    httpError(res, e)
  }
};

const getOneMenu = (req, res) => {};

const createdMenu =  async (req, res) => {
  try{
    const { dia, proteina, carbohidrato, grasas, verdura} = req.body
    const resDetail = await menuModel.create({
      dia, proteina, carbohidrato, grasas, verdura
    })
    res.send({data: resDetail })
  } catch(e) {
    httpError(res, e)
  }
};

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
