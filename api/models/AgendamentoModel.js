import db from '../database/db.js'
import { DataTypes } from 'sequelize'
import UsuarioModel from './UsuarioModel.js';

const AgendamentoModel = db.define('Agendamento', {
    agendamentoID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    usuarioID:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
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
    situacao:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    data:{
        type: DataTypes.DATE,
        allowNull: false,
    }
},{tableName:'Agendamento'})

AgendamentoModel.belongsTo(UsuarioModel, {foreignKey:'usuarioID', allowNull:false})

export default AgendamentoModel