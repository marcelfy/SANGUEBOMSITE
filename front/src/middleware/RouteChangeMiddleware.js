import Api from "../service/Api";
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";


export const RouteChangeMiddleware = () => {
  Api.interceptors.request.use((request) => {
    const token = sessionStorage.getItem('token');
    console.log(request);
    const rotaAdmin = request.url.includes('admin') ? true : false

    if (token) {
      const decoded = jwt_decode(token);
      console.log(decoded);
      if (decoded.Perfil === 'Usuario' && rotaAdmin) {
        console.log('Usuário autenticado como usuário comum');
        //redirionar para pagina de nao possui permissao
  
      } else {
        console.log('Usuário autenticado, mas não é um usuário comum');
        // redirecionar para a página de login ou mostrar uma mensagem de erro
      }
    } else {
      console.log('Usuário não autenticado');
      // redirecionar para a página de login ou mostrar uma mensagem de erro
    }

    return request;
  })
}