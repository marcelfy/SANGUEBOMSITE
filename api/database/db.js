import { Sequelize } from "sequelize";

const db = new Sequelize("sanguebom","marcel" ,"10042002",{
    host: "localhost",
    dialect: "mysql"
})

export default db

