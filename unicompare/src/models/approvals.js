import mongoose,{ Schema, model } from "mongoose";
import { models } from "mongoose";

mongoose.Promise = global.Promise;
const Approval= new Schema({
    uploaded_by:String||'',
    approvalName:String,
    logoUrl:String,
    upload_time: {type: Date, default: Date.now}, 
})

const Approvals = models.approvals ||model("approvals", Approval);
export default Approvals;