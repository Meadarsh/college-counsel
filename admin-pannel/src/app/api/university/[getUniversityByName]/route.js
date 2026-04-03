import { NextResponse } from "next/server";
import Universities from "@/model/university.model";

export async function GET(res,{params}){
    try{
        const url = params.getUniversityByName;
        console.log(url);
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