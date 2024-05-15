import cloudinary from "cloudinary";
import connectDb from "@/databaseConnection/connect";
import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import Blogs from "@/models/blog.model";

cloudinary.config({
  cloud_name: `dkfnivsuv`,
  api_key: "144754317187248",
  api_secret: "OoO5TQ4ERiM54dcBuQjdicyizkg",
});
export const api = {
  bodyParser: false,
};

export async function POST(req, res) {
  try {
    connectDb();
    const data = await req.formData();
    const title = data.get("title");
    const subtitle = data.get("subtitle");
    const content = data.get("content");
    const subheading1 = data.get("subheading1");
    const subheading2 = data.get("subheading2");
    const subheading3 = data.get("subheading3");
    const subheading4 = data.get("subheading4");
    const subheading5 = data.get("subheading5");
    const subcontent1 = data.get("subcontent1");
    const subcontent2 = data.get("subcontent2");
    const subcontent3 = data.get("subcontent3");
    const subcontent4 = data.get("subcontent4");
    const subcontent5 = data.get("subcontent5");
    const file1 = data.get("image1");
    const file2 = data.get("image2");
    const file3 = data.get("image3");
    const file4 = data.get("image4");
    const file5 = data.get("image5");
    const file6 = data.get("image6");
    const tablevaluehead = data.get("valuehead");
    const tablekeyhead = data.get("keyhead");
    const tablekey = data.get("fields[keys]");
    const tablevalue = data.get("fields[values]");
    const subcontent =[subcontent1,subcontent2,subcontent3,subcontent4,subcontent5]
    const subheading= [subheading1,subheading2,subheading3,subheading4,subheading5]
    let images = [];
    const uploadToCloudinary = async (file) => {
      if (!file || file === undefined || file === "" || file === "null") {
        return 0;
      }
      const bytes = await file.arrayBuffer();
      const base64String = Buffer.from(bytes).toString("base64");

      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${base64String}`
      );
      const data = { url: result.secure_url, public_id: result.public_id };
      return data;
    };

    const uploadPromises = [file1, file2, file3, file4, file5, file6].map(
      uploadToCloudinary
    );
    images = await Promise.all(uploadPromises);
    const created = await Blogs.create({
      title: title,
      subtitle: subtitle,
      content: content,
      subheading:subheading,
      subcontent:subcontent,
      image:images,
      table:{
        valueHead:tablevaluehead,
        keyHead:tablekeyhead,
        keys:tablekey,
        values:tablevalue
      }
    })
    return NextResponse.json({ status: true, message: "Posted successfully" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      status: false,
      message: "Internal server error",
    });
  }
}
