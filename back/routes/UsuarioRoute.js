import express from 'express'
import UsuarioController from '../controllers/UsuarioController.js';

const UsuarioRoute  = express.Router();

UsuarioRoute.post("/usuario", UsuarioController.post);
UsuarioRoute.get("/usuario", UsuarioController.get);
UsuarioRoute.get("/usuario/:usuarioID", UsuarioController.getByUsuarioId);
UsuarioRoute.put("/usuario/:usuarioID", UsuarioController.post);
UsuarioRoute.delete("/usuario/:usuarioID", UsuarioController.delete);

export default UsuarioRoute;