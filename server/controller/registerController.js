import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userModel from '../models/Users.js';

async function register(req, res) {
    try {
        const { fullname, username, email, password } = req.body;

        if(!fullname || !username || !email || !password){
            res.status(400).json({ success: false, message: "All fields must be filled"});
        }

        async function existingUser() {
            await userModel.findOne({ $or: [{ username }, { email }]});
        }

        if(existingUser){
            res.status(409).json({ success: false, message: "Username or email already exists" });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const userData = {
            fullname,
            username,
            email,
            password: hashedPassword
        };
        const newUser = new userModel(userData);
        await newUser.save();
        res.status(200).json({ success: true, message: "User added successfully", user: newUser})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

export { register };