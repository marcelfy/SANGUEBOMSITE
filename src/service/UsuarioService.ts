import Api from '../service/Api'
 
const UsuarioService = {
    post: async (usuario: any): Promise<any> => {
        return await Api.post(`/usuario`, usuario)
            .then((res: any) => {
                return res.data
            });
    },
    get: (): Promise<any> => {
        return Api.get('/usuario').then((res) => { return res.data })
    },
    put:async(usuario:any):Promise<any> => {
        return  await Api.put(`/usuario/`, usuario)
        .then((res:any) => {
            return res.data});
    },
    delete:async(usuarioID:any):Promise<any> => {
        return  await Api.put(`/usuario/${usuarioID}`)
        .then((res:any) => {
            return res.data});
    },

    getByUsuarioId : async (usuarioID:number):Promise<any> => {    
        return await Api.get(`/usuario/getbyusuarioid/${usuarioID}`)
        .then((res:any)=>  {        
            return res.data});
    },
    login: async (usuario: any): Promise<any> => {
        return await Api.post(`/login`, usuario)
            .then((res: any) => {
                return res.data
            });
    },
    
}

export default UsuarioService;