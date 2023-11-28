import  express  from "express";
import DataModel from "./DataModel.js";

const DataRouter = express.Router();

DataRouter.post("/add" , async(req,res)=>{
    const DataToadd = new DataModel(req.body)
    let ques = await DataToadd.save()
    res.json(ques)
    console.log(ques)
})

export default DataRouter