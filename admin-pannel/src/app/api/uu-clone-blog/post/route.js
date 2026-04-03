import { NextResponse } from "next/server";
import connectDb from '../../../../databaseConnection/connect'
import UUCloneBlogs from "@/model/utt-clone-blog";
export const POST =async(req,res)=>{

  try {
    await connectDb();
    const data = await req.json();
    const Blog=await UUCloneBlogs.findOne({ url: data.data.url });
    if (Blog) {
      return NextResponse.json({status:false,message:"url already used"});
    }
    const create= await UUCloneBlogs.create({
      title: data.data.title,
      url: data.data.url,
      imageUrl: data.data.imageUrl,
      writer: data.data.writer,
      meta: data.meta,
      sequence: data.sequence,
    })
    return NextResponse.json({status:true,data:'Blog uploaded'})
  } catch (error) {
    console.log(error);
    return NextResponse.json({data:'Error'})
  }
}