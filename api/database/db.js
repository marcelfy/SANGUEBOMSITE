import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'

dotenv.config()

const db = new Sequelize(process.env.DB_NAME, process.env.BD_USER , process.env.DB_PASSWORD,{
    host: "localhost",
    dialect: "mysql"
})

export default db

