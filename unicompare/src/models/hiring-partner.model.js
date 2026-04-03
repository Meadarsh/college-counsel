import mongoose,{ Schema, model } from "mongoose";
import { models } from "mongoose";

mongoose.Promise = global.Promise;
const HiringPartners= new Schema({
    uploaded_by:String||'',
    companyName:String,
    logoUrl:String,
    upload_time: {type: Date, default: Date.now}, 
})

const HiringPartner = models.hiringPartners ||model("hiringPartners", HiringPartners);
export default HiringPartner;