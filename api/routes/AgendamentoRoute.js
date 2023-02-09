import express from 'express'
import AgendamentoController from '../controllers/AgendamentoController.js';
import { verifyJWT } from '../Middleware/verifyJWT.js';

const AgendamentoRoute  = express.Router();

AgendamentoRoute.post("/agendamento", verifyJWT , AgendamentoController.post);
AgendamentoRoute.get("/agendamento", verifyJWT , AgendamentoController.get );
AgendamentoRoute.get("/agendamento/getbyusuarioid/:usuarioID",verifyJWT ,  AgendamentoController.getByusuarioId );
AgendamentoRoute.get("/agendamento/getbyhemocentroid/:hemocentroID", verifyJWT , AgendamentoController.getByHemocentroId );
AgendamentoRoute.get("/agendamento/getbyagendamentoid/:agendamentoID", verifyJWT , AgendamentoController.getByAgendamentoId);
AgendamentoRoute.put("/agendamento/", verifyJWT , AgendamentoController.put);
AgendamentoRoute.put("/agendamento/relizaragendamento/:agendamentoID",verifyJWT ,  AgendamentoController.realizarAgendamento);
AgendamentoRoute.delete("/agendamento/:agendamentoID", verifyJWT , AgendamentoController.delete);

export default AgendamentoRoute;