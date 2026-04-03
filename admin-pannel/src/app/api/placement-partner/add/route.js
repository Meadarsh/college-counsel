import connectDb from "@/databaseConnection/connect";
import HiringPartner from "@/model/hiring-partner.model";
import { NextResponse } from "next/server";
export const POST =async(req,res)=>{

  try {
    await connectDb();
    const {data} = await req.json();
    const {url,companyName}= data    
    
    const PlacementPart=await HiringPartner.findOne({ companyName:companyName});
    if (PlacementPart) {
      return NextResponse.json({status:false,message:"Already added."});
    }
    const create= await HiringPartner.create({
        companyName:companyName,
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