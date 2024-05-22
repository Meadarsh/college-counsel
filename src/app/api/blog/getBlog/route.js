import connectDb from "@/databaseConnection/connect";
import Blogs from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function GET(req){
    try{
        await connectDb()
        const Blog=await Blogs.find({},'title subtitle image upload_time')
        const response = new NextResponse(JSON.stringify(Blog), {
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0',
              'Surrogate-Control': 'no-store'
            },
          });
          
          return response;
    }   
    catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ err, message: "Internal server error" }), {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        },
      });    }

} 
