import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userModel from '../models/Users.js';

async function register(req, res) {
    try {
        const { fullname, username, email, password } = req.body;

        if(!fullname || !username || !email || !password){
            return res.status(400).json({ success: false, message: "All fields must be filled"});
        }

        async function existingUser() {
            await userModel.findOne({ $or: [{ username }, { email }]});
        }

        const userExists = await existingUser();

        if(userExists){
            return res.status(409).json({ success: false, message: "Username or email already exists" });
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
        return res.status(200).json({ success: true, message: "User added successfully", user: newUser})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Server Error" })
    }
}

export { register };