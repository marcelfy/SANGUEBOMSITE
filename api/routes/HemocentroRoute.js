import express from 'express'
import HemocentroController from '../controllers/HemocentroController.js';
import { verifyJWT } from '../Middleware/verifyJWT.js';

const HemocentroRoute  = express.Router();

HemocentroRoute.post("/hemocentro", verifyJWT, HemocentroController.post);
HemocentroRoute.get("/hemocentro", HemocentroController.get );
HemocentroRoute.get("/hemocentro/getbyhemocentroid/:hemocentroID", verifyJWT,HemocentroController.getByHemocentroId);
HemocentroRoute.put("/hemocentro/:hemocentroID",verifyJWT, HemocentroController.put);
HemocentroRoute.delete("/hemocentro/:hemocentroID",verifyJWT ,HemocentroController.delete);

export default HemocentroRoute;