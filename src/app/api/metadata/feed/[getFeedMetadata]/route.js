import connectDb from "@/databaseConnection/connect";
import AiBlog from "@/models/Ai-Blog";
import { NextResponse } from "next/server";

// Helper function to remove HTML tags from content
const stripHtml = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
};

// Helper function to truncate text to a certain length
const truncate = (text, maxLength = 160) => {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export async function GET(req, { params }) {
    try {
        const slug = params.getFeedMetadata;
          if (!slug) {
            return NextResponse.json({ message: "URL parameter is missing" });
        }
        await connectDb();
        const blog = await AiBlog.findOne({ slug: slug }, { 
          _id: 0,
          title: 1,
          content: 1,
          metaTitle: 1,
          metaDescription: 1
        });

        if (blog) {
          const metaTitle = blog.metaTitle || blog.title;
          const metaDescription = blog.metaDescription || truncate(stripHtml(blog.content));
          
          return NextResponse.json({
            blog: {
              metaTitle,
              metaDescription
            }
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
