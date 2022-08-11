import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import UsuarioRoute from './routes/UsuarioRoute.js'

const app = express()


app.use(cors())

app.use(express.json())

app.use(UsuarioRoute)


try{
    await db.authenticate()
    db.sync()
    console.log("Conexão feita com sucesso!");
}catch(error){
    console.log(error);
}

app.listen(8000, ()=> console.log("Rodando na porta 8000"))