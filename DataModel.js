import mongoose from "mongoose";


const DataSchema = mongoose.Schema({
    question:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,
    answer:String
})

const DataModel = mongoose.model("datas" , DataSchema)
export default DataModel