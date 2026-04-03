import connectDb from "@/databaseConnection/connect";
import News from "@/model/news.model";
import { NextResponse } from "next/server";
export const dynamic='force-dynamic'
export async function GET(res,{params}){
    try{
        const url = params.getNewsByUrl;
        
        await connectDb()
        const news=await News.findOne({ url: url });
        return NextResponse.json(news)
    }   
    catch (err) {
    console.log(err);
    return NextResponse.json({ err,message: "Internal server error" });
    }
} 
