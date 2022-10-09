import express from 'express'
import auth from '../middleware/auth.js';
import AgendamentoController from '../controllers/AgendamentoController.js';

const AgendamentoRoute  = express.Router();

AgendamentoRoute.post("/agendamento", AgendamentoController.post);
AgendamentoRoute.get("/agendamento", AgendamentoController.get );
AgendamentoRoute.get("/agendamento/getbyagendamentoid/:agendamentoID", AgendamentoController.getByAgendamentoId);
AgendamentoRoute.put("/agendamento/:agendamentoID", AgendamentoController.put);
AgendamentoRoute.delete("/agendamento/:agendamentoID", AgendamentoController.delete);

export default AgendamentoRoute;