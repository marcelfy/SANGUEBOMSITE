import db from '../database/db.js'
import { DataTypes } from 'sequelize'
import UsuarioModel from './UsuarioModel.js'
import HemocentroModel from './HemocentroModel.js'

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
        foreignKey: true,
    },
    hemocentroID:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    situacao:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    data:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    horario:{
        type: DataTypes.TIME,
        allowNull: false,
    }
},{tableName:'Agendamento'})

export default AgendamentoModel