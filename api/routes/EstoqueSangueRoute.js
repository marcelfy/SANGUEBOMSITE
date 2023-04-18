import express from 'express'
import EstoqueSangueController from '../controllers/EstoqueSangueController.js';
import { verifyJWT } from '../Middleware/verifyJWT.js';

const EstoqueSangueRoute  = express.Router();

EstoqueSangueRoute.post("/estoquesangue", verifyJWT ,EstoqueSangueController.post);
EstoqueSangueRoute.get("/estoquesangue", EstoqueSangueController.get );
EstoqueSangueRoute.get("/estoquesangue/getbyestoquesangueid/:estoquesangueID",verifyJWT ,  EstoqueSangueController.getByestoqueSangueId);
EstoqueSangueRoute.put("/estoquesangue/:estoquesangueID", verifyJWT , EstoqueSangueController.put);
EstoqueSangueRoute.put("/estoquesangue/atualizarestoquemaximo/:estoqueSangueID", verifyJWT , EstoqueSangueController.atualizarEstoqueMaximo);
EstoqueSangueRoute.delete("/estoquesangue/:estoquesangueID", verifyJWT , EstoqueSangueController.delete);
EstoqueSangueRoute.put("/estoquesangue/atualizarEstoqueSangue/:tipoSangue/:quantidade", verifyJWT , EstoqueSangueController.atualizarEstoqueSangue);

export default EstoqueSangueRoute;