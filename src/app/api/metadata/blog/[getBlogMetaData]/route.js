import connectDb from "@/databaseConnection/connect";
import Blogs from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const url = params.getBlogMetaData;
        console.log("URL: ", url); 
        await connectDb();
        const blog = await Blogs.findOne({ url: url });
        console.log(blog); 
        if (blog && blog.meta) {
            return new NextResponse.json(blog.meta, {
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                },
            });
        } else {
            return NextResponse.json({ message: "Meta data not found" });
        }
    }   
    catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message, message: "Internal server error" });
    }
}
