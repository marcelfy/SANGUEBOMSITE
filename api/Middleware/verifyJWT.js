import jwt from 'jsonwebtoken'

export function verifyJWT(req, res, next){
    const token = req.headers['access-token'];
    if (!token) return res.status(401).json({ success: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ success: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      next();
    });
}