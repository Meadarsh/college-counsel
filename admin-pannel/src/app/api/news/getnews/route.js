import connectDb from "@/databaseConnection/connect"
import News from "@/model/news.model";
import { NextResponse } from "next/server";
export const dynamic='force-dynamic'
export const GET= async(req,res)=>{
   
    try {
      await connectDb();
      const news = await News.find({}, 'url title imageUrl upload_time');
      const response = new NextResponse(JSON.stringify(news))
      return response;
    } catch (err) {
      console.log(err);
      return new NextResponse.json({error:err});
    }
  }
  