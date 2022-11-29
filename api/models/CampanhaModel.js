import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const CampanhaModel = db.define('Campanha', {
    campanhaID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipoSangue:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    descricao:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ativo:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{tableName:'Campanha'});

export default CampanhaModel