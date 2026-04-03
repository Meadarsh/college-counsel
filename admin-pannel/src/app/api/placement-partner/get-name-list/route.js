import connectDb from "@/databaseConnection/connect";
import HiringPartner from "@/model/hiring-partner.model";
import { NextResponse } from "next/server";

export const dynamic='force-dynamic'

export const GET =async(req,res)=>{

  try {
    await connectDb();

    const PlacementPartner=await HiringPartner.find().select('companyName');   
    if (PlacementPartner) {
      return NextResponse.json({status:true,message:"Success",data:PlacementPartner});
    }
    return NextResponse.json({status:false,data:'Failed to get'})
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: false, data: "Internal error" });
  }
}