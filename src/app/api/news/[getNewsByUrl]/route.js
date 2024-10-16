import connectDb from "@/databaseConnection/connect";
import News from "@/models/news.model";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(res, { params }) {
  try {
    const url = params.getNewsByUrl;
    await connectDb();
    const results = await News.aggregate([
      {
        $facet: {
          specificBlog: [{ $match: { url: url } }],
          latestBlogs: [
            { $sort: { upload_time: -1 } },
            { $limit: 10 },
            { $project: { url: 1, title: 1, imageUrl: 1, upload_time: 1 } },
          ],
        },
      },
    ]);

    const specificBlog = results[0]?.specificBlog[0];
    let latestBlogs = results[0]?.latestBlogs || [];

    if (specificBlog) {
      latestBlogs = latestBlogs.filter((blog) => blog.url !== specificBlog.url);
    }
    const response = NextResponse.json({
      specificBlog,
      latestBlogs,
    });
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch (err) {
    return NextResponse.json({ err, message: "Internal server error" });
  }
}
