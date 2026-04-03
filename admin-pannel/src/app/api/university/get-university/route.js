import connectDb from "@/databaseConnection/connect"
import Universities from "@/model/university.model";
import { NextResponse } from "next/server";
export const dynamic='force-dynamic'
export const GET= async(req,res)=>{
   
    try {
      await connectDb();
      const universities = await Universities.find({}, 'url detail logoUrl offeredCourses upload_time');
      return NextResponse.json(universities);
    } catch (err) {
      console.log(err);
      return new NextResponse.json({error:err});
    }
  }
  