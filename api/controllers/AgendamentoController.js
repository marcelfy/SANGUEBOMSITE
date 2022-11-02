import AgendamentoModel from '../models/AgendamentoModel.js';
import * as bcript from 'bcrypt'
import jwt from 'jsonwebtoken'
import UsuarioModel from '../models/UsuarioModel.js';
import HemocentroModel from '../models/HemocentroModel.js';


const AgendamentoController = {

    async get(req, res) {
        try {
            const agendamentos = await AgendamentoModel.findAll();
            return agendamentos.length > 0 ? res.status(200).json(agendamentos) :
                res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async getByAgendamentoId(req, res) {
        const { agendamentoID } = req.params
        const agendamento = await AgendamentoModel.findOne({
            where: {
                agendamentoID: agendamentoID,
            }
        })
        return agendamento ? res.status(200).json(agendamento) : res.status(204).send()
    },

    async post(req, res) {
        var agendamento = req.body;
        try {
            AgendamentoModel.create(agendamento)
            return res.status(201).json({success:true, message: "Agendamento realizado com sucesso"});
        } catch (error) {
            console.log(error);
            return res.json({ message: error.message })
        }
    },

    async put(req, res){
        const { agendamentoID } = req.params
        try {
            await AgendamentoModel.update(req.body, { where: { agendamentoID: agendamentoID } });
            return res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async delete(req, res){
        const { agendamentoID } = req.params;
        try {
            await AgendamentoModel.destroy({ where: { agendamentoID: agendamentoID } });
            return res.status(204).send()
    
        } catch (error) {
            return res.json({ message: error.message })
        }
    },

}

export default AgendamentoController
