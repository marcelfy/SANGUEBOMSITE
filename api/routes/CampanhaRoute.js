import express from 'express'
import CampanhaController from '../controllers/CampanhaController.js';

const CampanhaRoute  = express.Router();

CampanhaRoute.post("/campanha", CampanhaController.post);
CampanhaRoute.get("/campanha", CampanhaController.get );
CampanhaRoute.get("/campanha/getbycampanhaid/:campanhaID", CampanhaController.getByCampanhaId);
CampanhaRoute.put("/campanha/:campanhaID", CampanhaController.put);
CampanhaRoute.delete("/campanha/:campanhaID", CampanhaController.delete);

export default CampanhaRoute;