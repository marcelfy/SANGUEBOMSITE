import {Api} from '../index.js'
 
const AgendamentoService = {
    post: async (agendamento: any): Promise<any> => {
        return await Api.post(`/agendamento`, agendamento)
            .then((res: any) => {
                return res.data
            });
    },
    get: (): Promise<any> => {
        return Api.get('/agendamento').then((res) => { return res.data })
    },
    put:async(agendamento:any):Promise<any> => {
        return  await Api.put(`/hemocentro/`, agendamento)
        .then((res:any) => {
            return res.data});
    },
    delete:async(agendamentoID:any):Promise<any> => {
        return  await Api.put(`/agendamento/${agendamentoID}`)
        .then((res:any) => {
            return res.data});
    },

    getByAgendamentoId : async (agendamentoID:number):Promise<any> => {    
        return await Api.get(`/agendamento/getbyagendamentoid/${agendamentoID}`)
        .then((res:any)=>  {        
            return res.data});
    },
    
}

export default AgendamentoService;