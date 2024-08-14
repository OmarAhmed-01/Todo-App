import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}, 
});

const userModel = mongoose.models.users || mongoose.model("users", UserSchema);
export default userModel; 