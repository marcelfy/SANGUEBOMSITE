import AgendamentoModel from '../models/AgendamentoModel.js'
import UsuarioModel from '../models/UsuarioModel.js'
import HemocentroModel from '../models/HemocentroModel.js'

export function Associations(){
    AgendamentoModel.belongsTo(UsuarioModel, { foreignKey: 'usuarioID' })
    AgendamentoModel.belongsTo(HemocentroModel, { foreignKey: 'hemocentroID' })
}