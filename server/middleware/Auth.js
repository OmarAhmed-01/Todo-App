import jwt from 'jsonwebtoken';
import secret from './secret.js';

function authMiddleware(req, res, next) {
    const token = req.header('Authorization').replace('Bearer', '');

    if(!token){
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }
    try {
        const decoded = jwt.decode(token, secret);
        req.user = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Token not valid" });
    }
}

export { authMiddleware };