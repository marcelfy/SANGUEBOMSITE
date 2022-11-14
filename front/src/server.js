import express from 'express'
import db  from './database/db.js';
import  UsuarioRoute  from './routes/UsuarioRoute.js';
 
const app = express();

app.use(express.json())

app.use(cors())

// app.use('/usuario', UsuarioRoute)

try{
    await db.authenticate()
}catch(error){
    console.log(error);
}

app.listen(3030, async () => {
    console.log("Servidor rodando na porta 3030");
})
