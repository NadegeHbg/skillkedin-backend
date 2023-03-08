//@DESC config database
import mongoose from "mongoose";
mongoose.set('strictQuery', false);


  const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('connected to mongo db')
    }catch(error){
        console.error('unable to connect to mongo db')
    }

}

export default dbConnect;