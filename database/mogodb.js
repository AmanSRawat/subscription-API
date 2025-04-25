import mongoose from "mongoose";
import { DB_URI,NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error('DB_URI is not defined')
}

const connectToDatabase = async () => {
    try{
        await mongoose.connect(DB_URI);
        console.log(`Connected to the database successfully in ${NODE_ENV} mode`);
    }catch(error){
        console.error('Error connecting to the database:', error.message);
        process.exit(1); 
    }
}
export default connectToDatabase;