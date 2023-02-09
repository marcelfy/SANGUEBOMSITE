import Api from '../service/Api'
 
const CampanhaService = {
    post: async (campanha: any): Promise<any> => {
        return await Api.post(`/campanha`, campanha)
            .then((res: any) => {
                return res.data
            });
    },
    get: (): Promise<any> => {
        return Api.get('/campanha').then((res) => { return res.data })
    },
    put:async(campanha:any):Promise<any> => {
        return  await Api.put(`/campanha/`, campanha)
        .then((res:any) => {
            return res.data});
    },
    delete:async(campanhaID:any):Promise<any> => {
        return  await Api.delete(`/campanha/${campanhaID}`)
        .then((res:any) => {
            return res.data});
    },

    getByCampanhaId : async (campanhaID:number):Promise<any> => {    
        return await Api.get(`/campanha/getbycampanhaid/${campanhaID}`)
        .then((res:any)=>  {        
            return res.data});
    },
    aprovarCampanha:async(campanhaID:number):Promise<any> => {
        return  await Api.put(`/campanha/aprovarcampanha/${campanhaID}`,)
        .then((res:any) => {
            return res.data});
    },
    
}

export default CampanhaService;