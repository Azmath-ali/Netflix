import mongoose from "mongoose"
import dotenv from 'dotenv'


dotenv.config({
    path : "./.env"
})


export const dataBaseConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
         console.log("DataBase Connected Successfully!!!")
    })
    .catch((err)=> console.log(err))
}