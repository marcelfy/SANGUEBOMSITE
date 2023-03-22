import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import UsuarioRoute from './routes/UsuarioRoute.js'
import AgendamentoModel from './models/AgendamentoModel.js'
import UsuarioModel from './models/UsuarioModel.js'
import CampanhaModel from './models/CampanhaModel.js'
import EstoqueSangueModel from './models/EstoqueSangueModel.js'
import DoacaoModel from './models/DoacaoModel.js'
import AgendamentoRoute from './routes/AgendamentoRoute.js'
import CampanhaRoute from './routes/CampanhaRoute.js'
import EstoqueSangueRoute from './routes/EstoqueSangueRoute.js'
import DoacaoRoute from './routes/DoacaoRoute.js'
import HemocentroModel from './models/HemocentroModel.js'
import HemocentroRoute from './routes/HemocentroRoute.js'
import { Associations } from './Associations/Associations.js'
import * as dotenv from 'dotenv'
import PerfilModel from './models/PerfilModel.js'
import PerfilRoute from './routes/PerfilRoute.js'

const app = express()

dotenv.config()
app.use(cors())


app.use(express.json())

app.use(UsuarioRoute)
app.use(AgendamentoRoute)
app.use(CampanhaRoute)
app.use(EstoqueSangueRoute)
app.use(DoacaoRoute)
app.use(HemocentroRoute)
app.use(PerfilRoute)

try {
    
    await db.authenticate()
    
    await Associations()

    await AgendamentoModel.sync()
    await UsuarioModel.sync()
    await HemocentroModel.sync()
    await CampanhaModel.sync()
    await EstoqueSangueModel.sync()
    await DoacaoModel.sync()
    await PerfilModel.sync()


    console.log("Conexão feita com sucesso!")
} catch (error) {
    console.log(error);
}

app.listen(8000, () => console.log("Rodando na porta 8000"))
