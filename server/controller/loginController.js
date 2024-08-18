import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/Users.js';
import secret from '../middleware/secret.js';
async function login(req, res) {
    try {
        const user = await userModel.findOne({
            email: req.body.email,
        });

        if (!user) {
            return res.status(404).json({ success: false, message: "Email or password are incorrect" });
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        
        if(isPasswordValid){
            const token = jwt.sign({
                userId: user._id,
                email: user.email,
                fullname: user.fullname,
            }, secret);
            return res.status(200).json({ success: true, token });
        }
        else{
            return res.status(404).json({ success: false, message: "Email or password are incorrect"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Server error"});
    }
}

async function getUser(req, res) {
    try {
        const user = await userModel.findById(req.user.userId).select('-password');
        if(!user){
            return res.status(404).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ success: true, user: user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: error.message });
    }
}

export { login, getUser  };