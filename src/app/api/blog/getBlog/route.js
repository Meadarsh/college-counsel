import connectDb from "@/databaseConnection/connect";
import Blogs from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function GET(req){
    try{
        await connectDb()
        const Blog=await Blogs.find({},'title subtitle image upload_time')
        return NextResponse.json(Blog)
    }   
    catch (err) {
    console.log(err);
    return NextResponse.json({ err,message: "Internal server error" });
    }

} 
