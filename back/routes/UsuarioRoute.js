import express from 'express'
import { deletarUsuario, getByUsuarioId, getUsuarios, postUsuario, putUsuario } from '../controllers/UsuarioController.js';

const UsuarioRoute  = express.Router();

UsuarioRoute.post("/usuario", postUsuario);
UsuarioRoute.get("/usuario", getUsuarios);
UsuarioRoute.get("/usuario/:usuarioID", getByUsuarioId);
UsuarioRoute.put("/usuario/:usuarioID", putUsuario);
UsuarioRoute.delete("/usuario/:usuarioID", deletarUsuario);

export default UsuarioRoute;