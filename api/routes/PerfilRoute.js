import express from 'express'
import PerfilController from '../controllers/PerfilController.js';
import { verifyJWT } from '../Middleware/verifyJWT.js';

const PerfilRoute  = express.Router();

PerfilRoute.get("/perfil" , PerfilController.get);

export default PerfilRoute;