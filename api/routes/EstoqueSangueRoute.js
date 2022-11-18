import express from 'express'
import EstoqueSangueController from '../controllers/EstoqueSangueController.js';

const EstoqueSangueRoute  = express.Router();

EstoqueSangueRoute.post("/estoquesangue", EstoqueSangueController.post);
EstoqueSangueRoute.get("/estoquesangue", EstoqueSangueController.get );
EstoqueSangueRoute.get("/estoquesangue/getbyestoquesangueid/:estoquesangueID", EstoqueSangueController.getByestoqueSangueId);
EstoqueSangueRoute.put("/estoquesangue/:estoquesangueID", EstoqueSangueController.put);
EstoqueSangueRoute.delete("/estoquesangue/:estoquesangueID", EstoqueSangueController.delete);

export default EstoqueSangueRoute;