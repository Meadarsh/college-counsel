import connectDb from "@/databaseConnection/connect";
import Approvals from "@/models/approvals";
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
    const approval = university.sequence.find(
      (item) => item.type === "approvals"
    );
    let approvals = [];

    if (
      approval &&
      approval.approvals &&
      approval.approvals.length > 0
    ) {
      approvals = await Approvals.find({
        _id: { $in: approval.approvals },
      }).select("approvalName logoUrl");
    }
    
    return NextResponse.json({university,companyDetails,approvals});
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err, message: "Internal server error" });
  }
}
