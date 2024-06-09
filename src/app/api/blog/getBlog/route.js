// src/app/api/blog/getBlog/route.js
import connectDb from "@/databaseConnection/connect";
import Blogs from "@/models/blog.model";
import { NextResponse } from "next/server";
export const dynamic='force-dynamic'
export async function GET() {
  try {
    await connectDb();
    const blogs = await Blogs.find({}, 'url title subtitle image upload_time');
    const response = new NextResponse(JSON.stringify(blogs), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ err, message: "Internal server error" }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      },
    });
  }
}
