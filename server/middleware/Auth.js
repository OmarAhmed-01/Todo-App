import jwt from 'jsonwebtoken';
import base64Secret from './secret.js';


function authMiddleware(req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '').trim();

    if(!token){
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }
    try {
        const originalSecret = Buffer.from(base64Secret, 'base64').toString('utf-8');
        const decoded = jwt.verify(token, originalSecret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Token not valid" });
    }
}

export { authMiddleware };