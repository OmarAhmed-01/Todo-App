import jwt from 'jsonwebtoken';
import secret from './secret.js';

function authMiddleware(req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '').trim();

    if(!token){
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Token not valid" });
    }
}

export { authMiddleware };