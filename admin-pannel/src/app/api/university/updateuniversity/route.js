import { NextResponse } from "next/server";
import connectDb from '../../../../databaseConnection/connect';
import Universities from "@/model/university.model";

export const POST = async (req) => {
  try {
    await connectDb();
    const data = await req.json();

    const universityById = await Universities.findById(data.id);
    if (!universityById) {
      return NextResponse.json({ status: false, message: "University not found" });
    }

    const universityByUrl = await Universities.findOne({ url: data.data.url });
    if (universityByUrl && universityById._id.toString() !== universityByUrl._id.toString()) {
      return NextResponse.json({ status: false, message: "URL already used" });
    }

    const update = await Universities.updateOne(
      { _id: data.id },
      {
        $set: {
          url: data.data.url,
          logoUrl: data.data.logoUrl,
          offeredCourses: data.data.offeredCourses,
          detail: data.data,
          meta: data.meta,
          sequence: data.sequence,
        },
      }
    );

    return NextResponse.json({ status: true, message: 'University updated successfully' });

  } catch (error) {
    console.error("Update university error:", error);
    return NextResponse.json({ status: false, message: 'An error occurred', error });
  }
};
