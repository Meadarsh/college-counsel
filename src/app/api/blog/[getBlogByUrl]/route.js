import connectDb from "@/databaseConnection/connect";
import Blogs from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function GET(res,{params}){
    try{
        const url = params.getBlogByUrl;
        await connectDb()
        const results = await Blogs.aggregate([
            {
                $facet: {
                    specificBlog: [
                        { $match: { url: url } }
                    ],
                    latestBlogs: [
                        { $sort: { createdAt: -1 } },
                        { $limit: 10 },
                        { $project: { url: 1, title: 1, imageUrl: 1, upload_time: 1 } }
                    ]
                }
            }
        ]);

        const specificBlog = results[0].specificBlog[0];
        const latestBlogs = results[0].latestBlogs;

        return NextResponse.json({
            specificBlog,
            latestBlogs
        });
    }   
    catch (err) {
    return NextResponse.json({ err,message: "Internal server error" });
    }
} 
