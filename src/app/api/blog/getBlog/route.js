import connectDb from "@/databaseConnection/connect";
import Blogs from "@/models/blog.model";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export const GET = async (req) => {
  try {
    await connectDb();
    
    // Get query parameters
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const search = searchParams.get('search') || '';
    const skip = (page - 1) * limit;
    const shortBlog = searchParams.get('shortBlog') || 'latest';
    
    // Build the query
    const query = {};
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { writer: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Get total count for pagination
    const total = await Blogs.countDocuments(query);
    
    // Get paginated results
    const blogs = await Blogs.find(query)
      .select('url title writer imageUrl upload_time')
      .sort({ upload_time:shortBlog === 'latest' ? -1 : 1 })
      .skip(skip)
      .limit(limit);
    
    // Prepare response
    const response = {
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
    };
    
    return new NextResponse(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      },
    });
    
  } catch (err) {
    console.error('Error fetching blogs:', err);
    return new NextResponse(JSON.stringify({ 
      success: false, 
      error: 'Failed to fetch blogs',
      message: err.message 
    }), {
      status: 500,
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