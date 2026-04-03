import { Schema,model, models } from "mongoose";
const Apply = new Schema({
    name:String,
    email: String, 
    phonenumber:String,
    course:String
 }, { timestamps: true },)

 export const UUCloneApplies =models.uucloneapplies || model("uucloneapplies",Apply)
