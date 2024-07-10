import connectDb from "@/databaseConnection/connect";
import Universities from "@/models/university.model";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const url = params.getUniversityMetaData;
          if (!url) {
            return NextResponse.json({ message: "URL parameter is missing" });
        }
        await connectDb();
        const university = await Universities.findOne({ url: url },{ _id: 0,meta: 1});
        if (university) {
            return NextResponse.json({university});
        } else {
            return NextResponse.json({ message: "Meta data not found" });
        }
    }   
    catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message, message: "Internal server error" });
    }
}
