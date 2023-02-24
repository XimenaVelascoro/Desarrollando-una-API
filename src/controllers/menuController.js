const {httpError} = require("../helpers/handleError");
const menuModel = require("../models/menu")


const getAllMenu = async (req, res) => {
  try{
    const listAll = await menuModel.find({})
    res.send({data: listAll })
  } catch(e) {
    res.status(500)
    res.sen('Algo paso')
  }
};

const getOneMenu = async(req, res) => {

  try {
    const one = await menuModel.findById(req.params.id);
    res.status(200).json(one);
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo paso' })
}
};

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

const updateMenu = async (req, res) => {
  try {
    const resUpdate = await menuModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.status(200).json(resUpdate);
  } catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
  }
  return false;
};

const deleteMenu = async (req, res) => {
  try {
    const resDetail = await menuModel.findOneAndRemove({ _id: req.body.id });
    res.status(200);
    res.send("Se logro Eliminar");
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo paso' })
}
};

module.exports = {
  getAllMenu,
  getOneMenu,
  createdMenu,
  updateMenu,
  deleteMenu,
};

