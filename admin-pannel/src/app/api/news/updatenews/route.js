import { NextResponse } from "next/server";
import connectDb from '../../../../databaseConnection/connect';
import News from "@/model/news.model";

export const POST = async (req, res) => {
  try {
    await connectDb();

    const data = await req.json();

    const NewsById = await News.findById(data.id);
    console.log(NewsById);
    
    if (!NewsById) {
      return NextResponse.json({ status: false, message: "News not found" });
    }

    const BlogByUrl = await News.findOne({ url: data.data.url });
    console.log(BlogByUrl._id,NewsById._id);
    
  if (BlogByUrl && !NewsById._id.equals(BlogByUrl._id)) {
  return NextResponse.json({ status: false, message: "URL already used" });
}
    const update = await News.updateOne(
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
      return NextResponse.json({ status: false, message: "News update failed" });
    }

    return NextResponse.json({ status: true, data: 'News updated successfully' });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: false, message: 'An error occurred', error });
  }
};
