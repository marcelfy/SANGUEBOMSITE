import express from 'express'
import auth from '../middleware/auth.js';
import DoacaoController from '../controllers/DoacaoController.js';

const DoacaoRoute  = express.Router();

DoacaoRoute.post("/doacao", DoacaoController.post);
DoacaoRoute.get("/doacao", DoacaoController.get );
DoacaoRoute.get("/doacao/getbydoacaoid/:doacaoID", DoacaoController.getByDoacaoId);
DoacaoRoute.put("/doacao/:doacaoID", DoacaoController.put);
DoacaoRoute.delete("/doacao/:doacaoID", DoacaoController.delete);

export default DoacaoRoute;