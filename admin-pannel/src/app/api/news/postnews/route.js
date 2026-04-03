import { NextResponse } from "next/server";
import connectDb from '../../../../databaseConnection/connect'
import News from "@/model/news.model";
export const POST =async(req,res)=>{

  try {
    
    await connectDb();
    const data = await req.json();
    const news=await News.findOne({ url: data.data.url });
    if (news) {
      return NextResponse.json({status:false,message:"url already used"});
    }
    const create= await News.create({
      title: data.data.title,
      url: data.data.url,
      imageUrl: data.data.imageUrl,
      writer: data.data.writer,
      meta: data.meta,
      sequence: data.sequence,
    })
    return NextResponse.json({status:true,data:'News uploaded'})
  } catch (error) {
    console.log(error);
    return NextResponse.json({data:'Error'})
  }
}