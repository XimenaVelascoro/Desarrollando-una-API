/*sirve para proteger cada ruta este se va a encargar de vigilar el origen de peticion middlewares exprres
--> req: peticiones cliente o frontend  res: tu obj para responder eje status code next que siga la
  funcion que continua eje el contoller*/
const checkOrigin = (req,res,next) => {
  const token = req.headers.authorization.split(' ').pop()
  if(token === '1234'){
    next()
  }else{
    res.status(409)
    res.send({error: 'Tu por aqui no pasas'})
  }

};
//se inyecta esta funcion en unas rutas para permitir o no el acceso a ellas
module.exports = checkOrigin;
