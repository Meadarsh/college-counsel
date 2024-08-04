import { Schema,model, models } from "mongoose";
const Certificate = new Schema({
    name: String,
    certificateLink: String, 
    started:String,
    jobPost:String,
    completed: String, 
 }, { timestamps: true },)

 export const Applies =models.certificate || model("applies",Certificate)
