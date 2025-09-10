import { NextResponse } from "next/server";
import connectDb from "@/databaseConnection/connect";
import AiBlog from "@/models/Ai-Blog";

// GET /api/ai-blog/[slug] - Get a single blog by slug
export async function GET(request, { params }) {
  try {
    const { slug } = params;
    await connectDb();
    
    const blog = await AiBlog.findOne({ slug });
    
    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }
    
    // Get related blogs (exclude the current one)
    const relatedBlogs = await AiBlog.find({
      _id: { $ne: blog._id },
      $or: [
        { title: { $regex: blog.title.split(' ').slice(0, 2).join(' '), $options: 'i' } },
        { content: { $regex: blog.title.split(' ').slice(0, 2).join(' '), $options: 'i' } }
      ]
    })
    .sort({ createdAt: -1 })
    .limit(3)
    .select('title imageUrl slug');
    
    return NextResponse.json({
      success: true,
      data: {
        ...blog.toObject(),
        relatedBlogs
      }
    });
    
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
