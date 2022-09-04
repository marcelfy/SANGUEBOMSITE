import jwt from 'jsonwebtoken'
// const { promisify } = require('util')
import util from 'util'


const auth = {
    ehAdmin: async function(req, res, next){
        const auth = req.headers.authorization;
        
        if(!auth){
            return res.status(400).json({success: false, message: "Token invalido falta o token"})
        }

        const [, token] =  auth.split(' ');

        if(!token){
            return res.status(400).json({success: false, message: "Token invalido 2"})
        } 

        try{
            const decode = await util.promisify(jwt.verify)(token, "LSJCH7JKSG2FDJKAS8907VHJ34S5S21HS1X2")
            req.usuarioID = decode.usuarioID;
            return next();
        }
        catch(error)
        {
            return res.status(400).json({success: false, message: "Token Invalido, faça o login novamente"})
        }
    }
}
 
export default auth;