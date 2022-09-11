import CampanhaModel from '../models/CampanhaModel';
import * as bcript from 'bcrypt'
import jwt from 'jsonwebtoken'


const CampanhaController = {

    async get(req, res) {
        try {
            const campanha = await CampanhaModel.findAll();
            return campanha.length > 0 ? res.status(200).json(campanha) :
                res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async getByCampanhaId(req, res) {
        const { campanhaID } = req.params
        const campanha = await CampanhaModel.findOne({
            where: {
                campanhaID: campanhaID,
            }
        })
        return campanha ? res.status(200).json(campanha) : res.status(204).send()
    },

    async post(req, res) {
        var campanha = req.body;
        try {
            CampanhaModel.create(campanha)
            return res.status(201).json(campanha);
        } catch (error) {
            console.log(error);
            return res.json({ message: error.message })
        }
    },

    async put(req, res){
        const { campanhaID } = req.params
        try {
            await CampanhaModel.update(req.body, { where: { campanhaID: campanhaID } });
            return res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async delete(req, res){
        const { campanhaID } = req.params;
        try {
            await CampanhaModel.destroy({ where: { campanhaID: campanhaID } });
            return res.status(204).send()
    
        } catch (error) {
            return res.json({ message: error.message })
        }
    },

}

export default CampanhaController
