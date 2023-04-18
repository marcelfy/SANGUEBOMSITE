import HemocentroModel from '../models/HemocentroModel.js';
import * as bcript from 'bcrypt'
import jwt from 'jsonwebtoken'


const HemocentroController = {

    async get(req, res) {
        try {
            const hemocentros = await HemocentroModel.findAll();
            return hemocentros.length > 0 ? res.status(200).json(hemocentros) :
                res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async getByHemocentroId(req, res) {
        const { hemocentroID } = req.params
        const hemocentro = await HemocentroModel.findOne({
            where: {
                hemocentroID: hemocentroID,
            }
        })
        return hemocentro ? res.status(200).json(hemocentro) : res.status(204).send()
    },

    async post(req, res) {
        var hemocentro = req.body;
        try {
            HemocentroModel.create(hemocentro)
            return res.status(201).json({ success: true, message: "Hemocentro cadastrado com sucesso" });
        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async put(req, res) {
        const { hemocentroID } = req.params
        try {
            await HemocentroModel.update(req.body, { where: { hemocentroID: hemocentroID } });
            return res.status(200).json({ success: true, message: "Hemocentro atualizado com sucesso" });

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async delete(req, res) {
        const { hemocentroID } = req.params;
        try {
            await HemocentroModel.destroy({ where: { hemocentroID: hemocentroID } });
            return res.status(200).json({ success: true, message: "Hemocentro excluído com sucesso" })

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

}

export default HemocentroController
