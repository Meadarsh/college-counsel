import connectDb from "@/databaseConnection/connect";
import Blogs from "@/models/blog.model";
import { NextResponse } from "next/server";

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
