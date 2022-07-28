import {db} from '../db'
const { DataTypes } = require("sequelize")

export const UsuarioModel = db.define('Usuario', {
    UsuarioID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Nome:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    Telefone:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    DataNascimento:{
        type: DataTypes.DATE,
        allowNull: true,
    },
    Cpf:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    Email:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    Senha:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    Uf:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    Cidade:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    TipoSanguineo:{
        type: DataTypes.STRING,
        allowNull: true,
    }
})
