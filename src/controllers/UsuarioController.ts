import {Request, Response} from 'express'
import { UsuarioModel } from '../database/models/UsuarioModel';

class UsuarioController {
    async get(req: Request, res: Response){}
    async getById(req: Request, res: Response){}
    async post(req: Request, res: Response){
        const {nome, telefone, dataNascimento, cpf, email, senha, uf, cidade, tipoSanguineo} = req.body;
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
    async put(req: Request, res: Response){}
    async delete(req: Request, res: Response){}
}

export default new UsuarioController();