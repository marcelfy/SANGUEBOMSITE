import {db} from '../db'
const { DataTypes } = require("sequelize")

export const UsuarioModel = db.define('Usuario', {
    usuarioID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    dataNascimento:{
        type: DataTypes.DATE,
        allowNull: true,
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    uf:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    cidade:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    tipoSanguineo:{
        type: DataTypes.STRING,
        allowNull: true,
    }
})
