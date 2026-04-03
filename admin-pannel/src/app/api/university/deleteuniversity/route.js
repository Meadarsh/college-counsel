import { NextResponse } from "next/server";
import connectDb from '../../../../databaseConnection/connect';
import Universities from "@/model/university.model";

export const DELETE = async (req) => {
  try {
    await connectDb();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ status: false, message: "ID is required" });
    }

    const deleted = await Universities.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ status: false, message: "University not found" });
    }

    return NextResponse.json({ status: true, message: 'University deleted successfully' });

  } catch (error) {
    console.error("Delete university error:", error);
    return NextResponse.json({ status: false, message: 'An error occurred', error });
  }
};
