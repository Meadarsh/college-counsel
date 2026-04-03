import connectDb from "@/databaseConnection/connect"
import UUCloneBlogs from "@/model/utt-clone-blog";
import { NextResponse } from "next/server";
export const dynamic='force-dynamic'
export const GET= async(req,res)=>{
   
    try {
      await connectDb();
      const blogs = await UUCloneBlogs.find({}, 'url title imageUrl upload_time');
      const response = new NextResponse(JSON.stringify(blogs))
      return response;
    } catch (err) {
      console.log(err);
      return new NextResponse.json({error:err});
    }
  }
  