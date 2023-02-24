import express from 'express'
import DoacaoController from '../controllers/DoacaoController.js';
import { verifyJWT } from '../Middleware/verifyJWT.js';

const DoacaoRoute  = express.Router();

DoacaoRoute.post("/doacao", verifyJWT ,DoacaoController.post);
DoacaoRoute.get("/doacao" ,DoacaoController.get );
DoacaoRoute.get("/doacao/getbydoacaoid/:doacaoID", verifyJWT ,DoacaoController.getByDoacaoId);
DoacaoRoute.put("/doacao/:doacaoID", verifyJWT ,DoacaoController.put);
DoacaoRoute.delete("/doacao/:doacaoID", verifyJWT ,DoacaoController.delete);

export default DoacaoRoute;