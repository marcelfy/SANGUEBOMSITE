import express from 'express'
import UsuarioController from '../controllers/UsuarioController.js';
import auth from '../middleware/auth.js';

const UsuarioRoute  = express.Router();

UsuarioRoute.post("/usuario",UsuarioController.post);
UsuarioRoute.get("/usuario", UsuarioController.get);
UsuarioRoute.get("/usuario/:usuarioID", UsuarioController.getByUsuarioId);
UsuarioRoute.put("/usuario/:usuarioID", UsuarioController.put);
UsuarioRoute.delete("/usuario/:usuarioID", UsuarioController.delete);
UsuarioRoute.post("/login", UsuarioController.login)

export default UsuarioRoute;