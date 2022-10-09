import express from 'express'
import auth from '../middleware/auth.js';
import HemocentroController from '../controllers/HemocentroController.js';

const HemocentroRoute  = express.Router();

HemocentroRoute.post("/hemocentro", HemocentroController.post);
HemocentroRoute.get("/hemocentro", HemocentroController.get );
HemocentroRoute.get("/hemocentro/getbyhemocentroid/:hemocentroID", HemocentroController.getByHemocentroId);
HemocentroRoute.put("/hemocentro/:hemocentroID", HemocentroController.put);
HemocentroRoute.delete("/hemocentro/:hemocentroID", HemocentroController.delete);

export default HemocentroRoute;