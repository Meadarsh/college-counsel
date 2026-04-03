import { NextResponse } from "next/server";
import connectDb from '../../../../databaseConnection/connect';
import UUCloneBlogs from "@/model/utt-clone-blog";

export const POST = async (req, res) => {
  try {
    await connectDb();

    const data = await req.json();
    console.log(data.id);

    const BlogById = await UUCloneBlogs.findById(data.id);
    console.log(BlogById);
    
    if (!BlogById) {
      return NextResponse.json({ status: false, message: "Blog not found" });
    }

    const BlogByUrl = await UUCloneBlogs.findOne({ url: data.data.url });
    console.log(BlogByUrl);
    
    if (BlogByUrl && BlogById._id != BlogByUrl._id) {
      return NextResponse.json({ status: false, message: "URL already used" });
    }

    const update = await UUCloneBlogs.updateOne(
      { _id: data.id }, // Filter: find the blog by its ID
      {
        $set: {
          title: data.data.title,
          url: data.data.url,
          imageUrl: data.data.imageUrl,
          writer: data.data.writer,
          meta: data.meta,
          sequence: data.sequence,
        },
      }
    );

    if (update.nModified === 0) {
      return NextResponse.json({ status: false, message: "Blog update failed" });
    }

    return NextResponse.json({ status: true, data: 'Blog updated successfully' });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: false, message: 'An error occurred', error });
  }
};
