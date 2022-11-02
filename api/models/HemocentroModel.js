import db from '../database/db.js'
import { DataTypes } from 'sequelize'
import AgendamentoModel from './AgendamentoModel.js'

const HemocentroModel = db.define('Hemocentro', {
    hemocentroID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    cep:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    endereco:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    bairro:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    cidade:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},{tableName:'Hemocentro'})

export default HemocentroModel