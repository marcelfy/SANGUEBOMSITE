import express from 'express'
import CampanhaController from '../controllers/CampanhaController.js';
import { verifyJWT } from '../Middleware/verifyJWT.js';

const CampanhaRoute  = express.Router();

CampanhaRoute.post("/campanha", CampanhaController.post);
CampanhaRoute.get("/campanha", CampanhaController.get );
CampanhaRoute.get("/campanha/getbycampanhaid/:campanhaID", verifyJWT , CampanhaController.getByCampanhaId);
CampanhaRoute.put("/campanha/:campanhaID", verifyJWT , CampanhaController.put);
CampanhaRoute.put("/campanha/aprovarcampanha/:campanhaID", verifyJWT , CampanhaController.aprovarCampanha);
CampanhaRoute.delete("/campanha/:campanhaID", verifyJWT , CampanhaController.delete);

export default CampanhaRoute;