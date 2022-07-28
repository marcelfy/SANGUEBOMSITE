import express, { json } from 'express'
import { db } from './database/db';
import { UsuarioRoute } from './routes/UsuarioRoute';

const app = express();

app.use(json())
app.use(UsuarioRoute)

app.listen(3030, async () => {
    await db.sync();
    console.log("Servidor rodando na porta 3030");
})