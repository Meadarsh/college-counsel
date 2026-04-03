import { NextResponse } from "next/server";
import connectDb from "@/databaseConnection/connect";
import { Applies } from "@/model/apply.model";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectDb();
    const data = await Applies.find().sort({ createdAt: -1 });
    return NextResponse.json({ status: true, data });
  } catch (error) {
    console.error("Fetch applications error:", error);
    return NextResponse.json({ status: false, message: "Internal server error" }, { status: 500 });
  }
}
