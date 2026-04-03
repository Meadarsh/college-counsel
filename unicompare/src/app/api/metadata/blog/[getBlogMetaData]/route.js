import connectDb from "@/databaseConnection/connect";
import Blogs from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const url = params.getBlogMetaData;
          if (!url) {
            return NextResponse.json({ message: "URL parameter is missing" });
        }
        await connectDb();
        const blog = await Blogs.findOne({ url: url },{ _id: 0,meta: 1});
        if (blog) {
            return NextResponse.json({blog});
        } else {
            return NextResponse.json({ message: "Meta data not found" });
        }
    }   
    catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message, message: "Internal server error" });
    }
}
