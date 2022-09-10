import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const EstoqueSangueModel = db.define('EstoqueSangue', {
    estoqueSangueID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tipoSangue:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantidadeTotal:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    quantidadeMaxima:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{tableName:'EstoqueSangue'})

export default EstoqueSangueModel