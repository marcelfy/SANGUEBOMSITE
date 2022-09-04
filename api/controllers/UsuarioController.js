import UsuarioModel from "../models/UsuarioModel.js";
import * as bcript from 'bcrypt'
import jwt from 'jsonwebtoken'


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
        var usuario = req.body;
        usuario.senha =  await bcript.hash(usuario.senha, 8);
        console.log(req.body)
        try {
            UsuarioModel.create(usuario)
            return res.status(201).json(usuario);
        } catch (error) {
            console.log(error);
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
    },

    async login(req, res){
        try{
            const usuario = await UsuarioModel.findOne({
                where: {email : req.body.email}
            })

            if(usuario ===null){
                return res.json({erro:true, message: "Usuário não existe na base de dados"})
            }

            if(!(await bcript.compare( req.body.senha ,usuario.senha))){
                return res.status(400).json({success:false, message: "Usuário ou senha incorreto"})
            }

            const token = jwt.sign({usuarioID: usuario.usuarioID},"LSJCH7JKSG2FDJKAS8907VHJ34S5S21HS1X2",{
                expiresIn: 60, //1min
                // expiresIn:'7d', 7dias
            });

            return res.status(201).json({success:true, usuario: usuario, token: token})
        }
        catch(error){
            return res.json({message: error.message})
        }
    }
}

export default UsuarioController
