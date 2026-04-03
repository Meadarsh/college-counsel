import connectDb from "@/databaseConnection/connect";
import UUCloneBlogs from "@/model/utt-clone-blog";
import { NextResponse } from "next/server";
export const dynamic='force-dynamic'
export async function GET(res,{params}){
    try{
        const url = params.getBlogByUrl;
        
        await connectDb()
        const Blog=await UUCloneBlogs.findOne({ url: url });
        return NextResponse.json(Blog)
    }   
    catch (err) {
    console.log(err);
    return NextResponse.json({ err,message: "Internal server error" });
    }
} 
