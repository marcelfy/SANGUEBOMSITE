import AgendamentoModel from '../models/AgendamentoModel.js'
import UsuarioModel from '../models/UsuarioModel.js'
import HemocentroModel from '../models/HemocentroModel.js'
import DoacaoModel from '../models/DoacaoModel.js'

export function Associations(){
    //agendamento tem uma chave que PERTENCE A usuario 
    AgendamentoModel.belongsTo(UsuarioModel, { foreignKey: 'usuarioID' })
    AgendamentoModel.belongsTo(HemocentroModel, { foreignKey: 'hemocentroID' })

    DoacaoModel.belongsTo(UsuarioModel, {foreignKey:'usuarioID'})
}