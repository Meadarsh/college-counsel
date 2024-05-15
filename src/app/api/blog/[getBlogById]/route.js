import connectDb from "@/databaseConnection/connect";
import Blogs from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function GET(res,{params}){
    try{
        const id= params.getBlogById
        await connectDb()
        const Blog=await Blogs.findById(id)
        return NextResponse.json(Blog)
    }   
    catch (err) {
    console.log(err);
    return NextResponse.json({ err,message: "Internal server error" });
    }
} 
