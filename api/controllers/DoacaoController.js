import DoacaoModel from '../models/DoacaoModel.js';

const DoacaoController = {

    async get(req, res) {
        try {
            const doacao = await DoacaoModel.findAll();
            return doacao.length > 0 ? res.status(200).json(doacao) :
                res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async getByDoacaoId(req, res) {
        const { doacaoID } = req.params
        const doacao = await DoacaoModel.findOne({
            where: {
                doacaoID: doacaoID,
            }
        })
        return doacao ? res.status(200).json(doacao) : res.status(204).send()
    },

    async post(req, res) {
        var doacao = req.body;
        try {
            DoacaoModel.create(doacao)
            return res.status(201).json({success:true, message:"Doação realizada com sucesso"});
        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async put(req, res){
        const { doacaoID } = req.params
        try {
            await DoacaoModel.update(req.body, { where: { doacaoID: doacaoID } });
            return res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async delete(req, res){
        const { doacaoID } = req.params;
        try {
            await DoacaoModel.destroy({ where: { doacaoID: doacaoID } });
            return res.status(204).send()
    
        } catch (error) {
            return res.json({ message: error.message })
        }
    },

}

export default DoacaoController
