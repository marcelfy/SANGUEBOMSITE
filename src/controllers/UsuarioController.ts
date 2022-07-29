import { Request, Response } from 'express'
import { UsuarioModel } from '../database/models/UsuarioModel';

class UsuarioController {
    async get(req: Request, res: Response) {
        const usuarios = await UsuarioModel.findAll();
        return usuarios.length > 0 ? res.status(200).json(usuarios) :
            res.status(204).send();
    }

    async getByUsuarioId(req: Request, res: Response) {
        const { usuarioID } = req.params
        const usuario = await UsuarioModel.findOne({
            where: {
                usuarioID: usuarioID,
            }
        })
        return usuario ? res.status(200).json(usuario) : res.status(204).send()
    }

    async post(req: Request, res: Response) {
        const { nome, telefone, dataNascimento, cpf, email, senha, uf, cidade, tipoSanguineo } = req.body;
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
    }

    async put(req: Request, res: Response) {
        const { usuarioID } = req.params
        await UsuarioModel.update(req.body, { where: {usuarioID : usuarioID}});
        return res.status(204).send();
    }

    async delete(req: Request, res: Response) { 
        const { usuarioID } = req.params;
        await UsuarioModel.destroy({where: {usuarioID: usuarioID}});
        return res.status(204).send();
    }
}

export default new UsuarioController();