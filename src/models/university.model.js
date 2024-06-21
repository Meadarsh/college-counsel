import mongoose,{ Schema, model } from "mongoose";
import { models } from "mongoose";

mongoose.Promise = global.Promise;
const UniversityModel= new Schema({
    uploaded_by:String||'',
    detail:Object,
    url:{
      type: String,
      required: true,
    },
    meta:Object,
    sequence: Array,
    upload_time: {type: Date, default: Date.now}, 
    updatedTime:String, 
})

const Universities = models.universities ||model("universities", UniversityModel);
export default Universities;