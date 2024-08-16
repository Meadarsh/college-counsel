import mongoose,{ Schema, model } from "mongoose";
import { models } from "mongoose";

mongoose.Promise = global.Promise;
const BlogModel= new Schema({
    uploaded_by:String||'',
    title: String,
    url:{
      type: String,
      required: true,
    },
    imageUrl: String,
    writer: String,
    meta:Object,
    sequence: Array,
    upload_time: {type: Date, default: Date.now}, 
    updatedTime:String, 
})

const Blogs = models.blogs ||model("blogs", BlogModel);
export default Blogs;