/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';

export default async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = await mongoose.connection;
        connection.on('connected',()=>
            console.log("MongoDB connected Successfully"))
        connection.on('error',(err)=>{console.log(`MONGODB Connection Error. Please cmake sure MongoDB is running : ${err}`) 
            process.exit()
        })

    } catch (error) {
        console.log(`Database Connection Error : ${error}`)
    }
}