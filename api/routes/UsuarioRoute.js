import express from 'express'
import UsuarioController from '../controllers/UsuarioController.js';
import { verifyJWT } from '../Middleware/verifyJWT.js';

const UsuarioRoute  = express.Router();

UsuarioRoute.post("/usuario",UsuarioController.post);
UsuarioRoute.get("/usuario" ,UsuarioController.get);
UsuarioRoute.get("/usuario/getbyusuarioid/:usuarioID",verifyJWT, UsuarioController.getByUsuarioId);
UsuarioRoute.put("/usuario", UsuarioController.put);
UsuarioRoute.delete("/usuario/:usuarioID", verifyJWT ,UsuarioController.delete);
UsuarioRoute.post("/login", UsuarioController.login)

export default UsuarioRoute;