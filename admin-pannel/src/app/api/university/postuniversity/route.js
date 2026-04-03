import { NextResponse } from "next/server";
import connectDb from '../../../../databaseConnection/connect'
import Universities from "@/model/university.model";
export const POST =async(req,res)=>{

  try {
    await connectDb();
    const data = await req.json();
    
    const University=await Universities.findOne({ url: data.data.url });
    if (University) {
      return NextResponse.json({status:false,message:"url already used"});
    }
    const create= await Universities.create({
      url: data.data.url,
      logoUrl: data.data.logoUrl,
      offeredCourses: data.data.offeredCourses,
      detail:data.data,
      meta:data.meta,
      sequence: data.sequence,
    })
    if(create._id){
    return NextResponse.json({status:true,data:'Uploaded'})}
    return NextResponse.json({status:false,data:'Failed to upload'})
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: false, data: "Internal error" });
  }
}