import db from '../database/db.js'
import { DataTypes } from 'sequelize'
import UsuarioModel from './UsuarioModel.js';

const DoacaoModel = db.define('Doacao', {
    doacaoID:{
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
    tipoSangue:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    quantidade:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{tableName:'Doacao'});

export default DoacaoModel