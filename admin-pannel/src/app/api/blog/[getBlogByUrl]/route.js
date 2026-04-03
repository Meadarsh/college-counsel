import connectDb from "@/databaseConnection/connect";
import Blogs from "@/model/blog.model";
import { NextResponse } from "next/server";
export const dynamic='force-dynamic'
export async function GET(res,{params}){
    try{
        const url = params.getBlogByUrl;
        
        await connectDb()
        const Blog=await Blogs.findOne({ url: url });
        return NextResponse.json(Blog)
    }   
    catch (err) {
    console.log(err);
    return NextResponse.json({ err,message: "Internal server error" });
    }
} 
