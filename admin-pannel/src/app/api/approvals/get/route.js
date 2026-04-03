import connectDb from "@/databaseConnection/connect";
import Approvals from "@/model/approvals";
import { NextResponse } from "next/server";
export const dynamic='force-dynamic'

export const GET =async(req,res)=>{

  try {
    await connectDb();

    const approvals=await Approvals.find()    
    if (approvals) {
      return NextResponse.json({status:true,message:"Success",data:approvals});
    }
    return NextResponse.json({status:false,data:'Failed to get'})
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: false, data: "Internal error" });
  }
}