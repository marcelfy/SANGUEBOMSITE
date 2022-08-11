import UsuarioModel from "../models/UsuarioModel.js";

const UsuarioController = {
    async get(req, res) {
        try {
            const usuarios = await UsuarioModel.findAll();
            return usuarios.length > 0 ? res.status(200).json(usuarios) :
                res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async getByUsuarioId(req, res) {
        const { usuarioID } = req.params
        const usuario = await UsuarioModel.findOne({
            where: {
                usuarioID: usuarioID,
            }
        })
        return usuario ? res.status(200).json(usuario) : res.status(204).send()
    },

    async post(req, res) {
        const { nome, telefone, dataNascimento, cpf, email, senha, uf, cidade, tipoSanguineo } = req.body;
        try {
            const usuario = await UsuarioModel.create({
                nome,
                telefone,
                dataNascimento,
                cpf,
                email,
                senha,
                uf,
                cidade,
                tipoSanguineo
            });
            return res.status(201).json(usuario);
        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async put(req, res){
        const { usuarioID } = req.params
        try {
            await UsuarioModel.update(req.body, { where: { usuarioID: usuarioID } });
            return res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async delete(req, res){
        const { usuarioID } = req.params;
        try {
            await UsuarioModel.destroy({ where: { usuarioID: usuarioID } });
            return res.status(204).send()
    
        } catch (error) {
            return res.json({ message: error.message })
        }
    }
}

export default UsuarioController
