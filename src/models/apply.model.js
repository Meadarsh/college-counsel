import { Schema,model, models } from "mongoose";
const Apply = new Schema({
    name:String,
    email: String, 
    phonenumber:String,
    city: String,   
    state:String, 
    country:String,
    course:String
 }, { timestamps: true },)

 export const Applies =models.applies || model("applies",Apply)
