import express from 'express'
import AgendamentoController from '../controllers/AgendamentoController.js';

const AgendamentoRoute  = express.Router();

AgendamentoRoute.post("/agendamento", AgendamentoController.post);
AgendamentoRoute.get("/agendamento", AgendamentoController.get );
AgendamentoRoute.get("/agendamento/getbyhemocentroid/:hemocentroID", AgendamentoController.getByHemocentroId );
AgendamentoRoute.get("/agendamento/getbyagendamentoid/:agendamentoID", AgendamentoController.getByAgendamentoId);
AgendamentoRoute.put("/agendamento/", AgendamentoController.put);
AgendamentoRoute.put("/agendamento/relizaragendamento/:agendamentoID", AgendamentoController.realizarAgendamento);
AgendamentoRoute.delete("/agendamento/:agendamentoID", AgendamentoController.delete);

export default AgendamentoRoute;