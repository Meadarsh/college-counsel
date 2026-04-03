import connectDb from "@/databaseConnection/connect";
import Approvals from "@/model/approvals";
import { NextResponse } from "next/server";
export const POST =async(req,res)=>{

  try {
    await connectDb();
    const {data} = await req.json();
    const {url,approvalName}= data    
    
    const approvals=await Approvals.findOne({ approvalName:approvalName});
    if (approvals) {
      return NextResponse.json({status:false,message:"Already added."});
    }
    const create= await Approvals.create({
      approvalName:approvalName,
        logoUrl:url
    })
    
    if(create._id){
    return NextResponse.json({status:true,data:'Uploaded'})}
    return NextResponse.json({status:false,data:'Failed to upload'})
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: false, data: "Internal error" });
  }
}