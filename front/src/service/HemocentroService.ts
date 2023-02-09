import Api from '../service/Api'
 
const HemocentroService = {
    post: async (hemocentro: any): Promise<any> => {
        return await Api.post(`/hemocentro`, hemocentro)
            .then((res: any) => {
                return res.data
            });
    },
    get: (): Promise<any> => {
        return Api.get('/hemocentro').then((res) => { return res.data })
    },
    put:async(hemocentro:any, id:number):Promise<any> => {
        return  await Api.put(`/hemocentro/${id}`, hemocentro)
        .then((res:any) => {
            return res.data});
    },
    delete:async(hemocentroID:any):Promise<any> => {
        return  await Api.delete(`/hemocentro/${hemocentroID}`)
        .then((res:any) => {
            return res.data});
    },

    getByHemocentroId : async (hemocentroID:number):Promise<any> => {    
        return await Api.get(`/hemocentro/getbyhemocentroid/${hemocentroID}`)
        .then((res:any)=>  {        
            return res.data});
    },
    
}

export default HemocentroService;