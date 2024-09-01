import connectDb from "@/databaseConnection/connect";
import HiringPartner from "@/models/hiring-partner.model";
import Universities from "@/models/university.model";
import { NextResponse } from "next/server";

export async function GET(res, { params }) {
  try {
    await connectDb();
    const url = params.getUniversityByName;
    const university = await Universities.findOne({ url: url });
    if (!university) {
      return NextResponse.json({
        status: false,
        message: "University not found",
      });
    }

    const placementPartner = university.sequence.find(
      (item) => item.type === "placement_partner"
    );
    let companyDetails = [];

    if (
      placementPartner &&
      placementPartner.company &&
      placementPartner.company.length > 0
    ) {
      companyDetails = await HiringPartner.find({
        _id: { $in: placementPartner.company },
      }).select("companyName logoUrl");
    }
    
    return NextResponse.json({university,companyDetails});
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err, message: "Internal server error" });
  }
}
