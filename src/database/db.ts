import { Sequelize } from "sequelize";

export const db = new Sequelize("sanguebom","marcel" ,"10042002",{
    host: "localhost",
    dialect: "mysql"
})