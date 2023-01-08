import {Api} from '../index.js'
 
const EstoqueSangueService = {
    post: async (estoqueSangue: any): Promise<any> => {
        return await Api.post(`/estoquesangue`, estoqueSangue)
            .then((res: any) => {
                return res.data
            });
    },
    get: (): Promise<any> => {
        return Api.get('/estoquesangue').then((res) => { return res.data })
    },
    put:async(estoqueSangue:any):Promise<any> => {
        return  await Api.put(`/estoquesangue/`, estoqueSangue)
        .then((res:any) => {
            return res.data});
    },
    atualizarEstoqueMaximo:async(quantidade:any, estoqueSangueID:any):Promise<any> => {
        return  await Api.put(`/estoquesangue/atualizarestoquemaximo/${estoqueSangueID}`, quantidade)
        .then((res:any) => {
            return res.data});
    },
    delete:async(estoqueSangueID:any):Promise<any> => {
        return  await Api.put(`/estoquesangue/${estoqueSangueID}`)
        .then((res:any) => {
            return res.data});
    },

    getByEstoqueSangueId : async (estoqueSangueID:number):Promise<any> => {    
        return await Api.get(`/estoqueSangue/getbyestoquesangueid/${estoqueSangueID}`)
        .then((res:any)=>  {        
            return res.data});
    },
    
}

export default EstoqueSangueService;