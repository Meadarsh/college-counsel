import { NextResponse } from "next/server";
import connectDb from "@/databaseConnection/connect";
import AiBlog from "@/models/Ai-Blog";

// GET /api/ai-blog - Get all blogs with pagination and search
export async function GET(request) {
  try {
    await connectDb();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const shortBlog = searchParams.get('shortBlog') || 'latest';
    const search = searchParams.get('search') || '';
    
    const skip = (page - 1) * limit;
    
    // Build the query
    const query = {};
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Get total count for pagination
    const total = await AiBlog.countDocuments(query);
    
    // Get paginated results
    const blogs = await AiBlog.find(query)
      .sort({ createdAt: -1 || shortBlog === 'latest' ? -1 : 1 })
      .skip(skip)
      .limit(limit)
      .select('title imageUrl slug createdAt');
    
    return NextResponse.json({
      success: true,
      data: {
        blogs,
        pagination: {
          total,
          page,
          totalPages: Math.ceil(total / limit),
          limit
        }
      }
    });
    
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

