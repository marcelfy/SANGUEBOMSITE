import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const UsuarioModel = db.define('Usuario', {
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
        validate:{
            isDate:true,
        }
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail:true
        },
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
},{tableName:'Usuario'})

export default UsuarioModel