import connectDb from "@/databaseConnection/connect";
import News from "@/models/news.model";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const url = params.getNewsMetaData;
          if (!url) {
            return NextResponse.json({ message: "URL parameter is missing" });
        }
        await connectDb();
        const news = await News.findOne({ url: url },{ _id: 0,meta: 1});
        if (news) {
            return NextResponse.json({news});
        } else {
            return NextResponse.json({ message: "Meta data not found" });
        }
    }   
    catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message, message: "Internal server error" });
    }
}
