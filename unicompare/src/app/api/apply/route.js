import connectDb from "@/databaseConnection/connect";
import { Applies } from "@/models/apply.model";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    await connectDb();
    const body = await req.json();
      const Applied = await Applies.create(body);
      if (Applied) {
        return NextResponse.json({
          status: true,
          message: "Applied successfully",
        });
      }
      return NextResponse.json({ status: false, message: "Failed" });
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: false, message: "Failed" });
  }
}
