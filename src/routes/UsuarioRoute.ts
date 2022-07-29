import express from 'express'
import UsuarioController from '../controllers/UsuarioController';

const UsuarioRoute  = express.Router();

UsuarioRoute.post("/usuario", UsuarioController.post);
UsuarioRoute.get("/usuarios", UsuarioController.get);
UsuarioRoute.get("/usuario/:usuarioID", UsuarioController.getByUsuarioId);
UsuarioRoute.put("/usuario/:usuarioID", UsuarioController.put);
UsuarioRoute.delete("/usuario/:usuarioID", UsuarioController.delete);

export {UsuarioRoute};