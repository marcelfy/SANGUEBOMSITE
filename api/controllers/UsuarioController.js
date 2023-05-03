import UsuarioModel from "../models/UsuarioModel.js";
import PerfilModel from '../models/PerfilModel.js'
import * as bcript from 'bcrypt'
import jwt from 'jsonwebtoken'


const UsuarioController = {

    async get(req, res) {
        try {
            const usuarios = await UsuarioModel.findAll({include: PerfilModel});
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
        
        try {
            const existeUsuario = await UsuarioModel.findOne({
                where: {
                    email: req.body.email,
                }
            })
            
            if (existeUsuario?.length > 0 || existeUsuario != null) {
                return res.status(200).json({success:false, message: "Email ja em uso" })
            } else {
                var usuario = req.body;
                usuario.senha = await bcript.hash(usuario.senha, 8);
                    await UsuarioModel.create(usuario)
                    return res.status(201).json({success:true , message:"Usuario cadastrado com sucesso"});
                }
            }
        
        catch (error) {
            return res.json({ message: error.message })
        }


    },

    async put(req, res) {
        try {
            await UsuarioModel.update(req.body, { where: { usuarioID: req.body.usuarioID } });
            return res.status(204).send();

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async delete(req, res) {
        const { usuarioID } = req.params;
        try {
            await UsuarioModel.destroy({ where: { usuarioID: usuarioID } });
            return res.status(204).send()

        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    async login(req, res) {
        try {
            const usuario = await UsuarioModel.findOne({
                where: { email: req.body.email },
                include: [PerfilModel]
            })

            if (usuario === null) {
                return res.json({ success: false, message: "Usuário não existe na base de dados" })
            }

            if (!(await bcript.compare(req.body.senha, usuario.senha))) {
                return res.status(200).json({ success: false, message: "Usuário ou senha incorreto" })
            }

            const token = jwt.sign({ perfil: usuario.Perfil?.nome, nome: usuario.nome }, process.env.TOKEN_SECRET , {
                expiresIn: '2h', // 60 /1min
                // expiresIn:'7d', 7dias,
                // issuer : "Admin"
            });

            usuario.senha = null;

            return res.status(201).json({ success: true, usuario: usuario, token: token })
        }
        catch (error) {
            return res.json({ message: error.message })
        }
    }
}

export default UsuarioController
