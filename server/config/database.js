import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connect_database = async() => {
    try {
        await mongoose.connect(process.env.mongodb_connection_uri);
        console.log("Connected to database");
    } catch (error) {
        console.log("Error: ", error);
        process.exit(1);
    }
}