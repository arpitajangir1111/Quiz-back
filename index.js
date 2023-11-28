import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import DataRouter from "./DataRouter.js"

const password = encodeURIComponent("bannajigudha") 
const connection = mongoose.connect(mongodb+srv)
const app = express();
app.use(cors())

app.use(express.json())
app.use("/data",DataRouter)

connection.then(()=>{
    app.listen(9080 , ()=> console.log("server is stated at port 9080"))
})
.catch((err)=>console.log("err" + err))