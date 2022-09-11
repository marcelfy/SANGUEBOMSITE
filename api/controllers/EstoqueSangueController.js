import EstoqueSangueModel from '../models/EstoqueSangueModel';
import * as bcript from 'bcrypt'
import jwt from 'jsonwebtoken'


const EstoqueSangueController = {

    async get(req, res) {
        try {
            const estoqueSangue = await EstoqueSangueModel.findAll();
            return estoqueSangue.length > 0 ? res.status(200).json(estoqueSangue) :
                res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async getByestoqueSangueId(req, res) {
        const { estoqueSangueID } = req.params
        const estoqueSangue = await EstoqueSangueModel.findOne({
            where: {
                estoqueSangueID: estoqueSangueID,
            }
        })
        return estoqueSangue ? res.status(200).json(estoqueSangue) : res.status(204).send()
    },

    async post(req, res) {
        var estoqueSangue = req.body;
        try {
            EstoqueSangueModel.create(estoqueSangue)
            return res.status(201).json(estoqueSangue);
        } catch (error) {
            console.log(error);
            return res.json({ message: error.message })
        }
    },

    async put(req, res){
        const { estoqueSangueID } = req.params
        try {
            await EstoqueSangueModel.update(req.body, { where: { estoqueSangueID: estoqueSangueID } });
            return res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async delete(req, res){
        const { estoqueSangueID } = req.params;
        try {
            await EstoqueSangueModel.destroy({ where: { estoqueSangueID: estoqueSangueID } });
            return res.status(204).send()
    
        } catch (error) {
            return res.json({ message: error.message })
        }
    },

}

export default EstoqueSangueController
