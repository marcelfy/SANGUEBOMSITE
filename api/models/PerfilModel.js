import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const PerfilModel = db.define('Perfil', {
    perfilID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    
},{tableName:'Perfil'})

export default PerfilModel