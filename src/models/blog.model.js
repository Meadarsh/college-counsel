import mongoose,{ Schema, model } from "mongoose";
import { models } from "mongoose";

mongoose.Promise = global.Promise;
const BlogModel= new Schema({
    uploaded_by:String||'',
    title: String, 
    subtitle:String,
    content:String,
    subheading: Array,
    subcontent:Array,
    image:Array,   
    table:Object,
    upload_time: {type: Date, default: Date.now}, 
    updatedTime:String, 
})

const Blogs = models.blogs ||model("blogs", BlogModel);
export default Blogs;