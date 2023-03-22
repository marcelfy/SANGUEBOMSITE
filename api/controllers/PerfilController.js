import PerfilModel from "../models/PerfilModel.js";

const PerfilController = {

    async get(req, res) {
        try {
            const perfis = await PerfilModel.findAll();
            return perfis.length > 0 ? res.status(200).json(perfis) :
                res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },


}

export default PerfilController
