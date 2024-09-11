
import express from 'express'
import dotenv from "dotenv"
import {dataBaseConnection}  from './utils/dataBase.js'
import cookieparser from "cookie-parser"
import userRoute from "./routes/userRoute.js"
import cors from "cors"
import path from 'path'
import bodyParser from 'body-parser'



const app = express()


dataBaseConnection()

dotenv.config({
    path : ".env"
})

const PORT = process.env.PORT || 8000

const _dirname = path.resolve()


// Middlewares...
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cookieparser())
app.use(bodyParser.urlencoded({extended : true}))



const corsOption = {
    origin : "http://localhost:5173",
    // origin : "https://netflix-2-0-1.onrender.com",
    credentials : true
}

app.use(cors(corsOption))




// API...

app.use("/api/v1/user", userRoute)


app.use(express.static(path.join(_dirname, "/Frontend/dist")))

app.get("*", (_, res)=>{
    res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"))
})

app.listen(PORT, ()=>{
    console.log(`Server Working at ${PORT}`)
})



