import connectDb from "@/databaseConnection/connect";
import Universities from "@/models/university.model";
import { NextResponse } from "next/server";

export async function GET(res,{params}){
    try{
        await connectDb()
        const url = params.getUniversityByName;
        const university = await Universities.findOne({url:url})
        if (!university) {
            return NextResponse.json({
              status: false,
              message: "University not found",
            });}
        return NextResponse.json(university)
    }
    catch(err){
        console.log(err);
        return NextResponse.json({ err,message: "Internal server error" });
    }
}