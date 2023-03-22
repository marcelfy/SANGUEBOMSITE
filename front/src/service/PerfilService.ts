import Api from './Api'
 
const PerfilService = {
    get: (): Promise<any> => {
        return Api.get('/perfil').then((res) => { return res.data })
    },
}

export default PerfilService;