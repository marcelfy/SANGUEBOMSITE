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
        allowNull: false,
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    dataNascimento:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    uf:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    cidade:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipoSanguineo:{
        type: DataTypes.STRING,
        allowNull: true,
    }
})
