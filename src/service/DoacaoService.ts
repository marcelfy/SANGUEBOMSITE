import Api from '../service/Api'
 
const DoacaoService = {
    post: async (doacao: any): Promise<any> => {
        return await Api.post(`/doacao`, doacao)
            .then((res: any) => {
                return res.data
            });
    },
    get: (): Promise<any> => {
        return Api.get('/doacao').then((res) => { return res.data })
    },
    put:async(doacao:any):Promise<any> => {
        return  await Api.put(`/doacao/`, doacao)
        .then((res:any) => {
            return res.data});
    },
    delete:async(doacaoID:any):Promise<any> => {
        return  await Api.put(`/doacao/${doacaoID}`)
        .then((res:any) => {
            return res.data});
    },

    getByDoacaoId : async (doacaoID:number):Promise<any> => {    
        return await Api.get(`/doacao/getbydoacaoid/${doacaoID}`)
        .then((res:any)=>  {        
            return res.data});
    },
    
}

export default DoacaoService;