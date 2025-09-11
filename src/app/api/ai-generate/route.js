import { NextResponse } from "next/server";
import OpenAI from "openai";
import axios from "axios";
import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import connectDb from "@/databaseConnection/connect";
import AiBlog from "@/models/Ai-Blog";
export const dynamic = 'force-dynamic';

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

export async function GET() {
  try {
    await connectDb();

    // --------------------------
    // Step 1: Generate Unique Title
    // --------------------------    
    // Helper: get embedding
    async function getEmbedding(text) {
      const response = await openai.embeddings.create({
        model: "text-embedding-3-small", // cheap + fast
        input: text,
      });
      return response.data[0].embedding;
    }
    
    async function generateUniqueTitle() {
      let uniqueTitle = null;
      let attempts = 0;
    
      // Preload embeddings of existing titles from DB
      const existingBlogs = await AiBlog.find({}, "title embedding"); // store embeddings in DB
      const existingEmbeddings = existingBlogs.map(b => ({
        title: b.title,
        embedding: b.embedding,
      }));
    
      while (!uniqueTitle && attempts < 5) {
        attempts++;
    
        const titleGen = await openai.chat.completions.create({
          model: "gpt-5-mini",
          messages: [
            {
              role: "system",
              content: `
    You are an expert blog writer for "College Counsel", specializing in online education.
    
    🎯 Task:
    Suggest ONE unique, catchy blog title (max 10 words) about online education.  
    It must be fresh, trending, and appealing to students & professionals.
    
    Focus areas:
    - Online degree programs (MBA, BCA, MCA, etc.)
    - Career growth with online education
    - Online vs traditional courses
    - ROI and affordability of online degrees
    
    ⚠️ Rules:
    - Must highlight flexibility, affordability, or career growth
    - No generic titles ("The Future of Education")
    - JSON output only:
    { "title": "generated title" }
              `,
            },
            {
              role: "user",
              content: "Generate a unique blog title for College Counsel.",
            },
          ],
        });
    
        const rawTitle = titleGen.choices[0].message.content ?? "{}";
        let parsed;
        try {
          parsed = JSON.parse(rawTitle);
        } catch {
          continue; // skip if invalid
        }
    
        const newTitle = parsed.title;
    
        // Get embedding of new title
        const newEmbedding = await getEmbedding(newTitle);
    
        // Compare with existing embeddings
        let isDuplicate = false;
        for (const { title, embedding } of existingEmbeddings) {
          const sim = cosineSimilarity(newEmbedding, embedding);
          if (sim > 0.6) { // threshold tweakable
            isDuplicate = true;
            break;
          }
        }
    
        if (!isDuplicate) {
          uniqueTitle = newTitle;
          await AiBlog.create({
            title: uniqueTitle,
            embedding: newEmbedding,
          });
        }
      }
    
      return uniqueTitle;
    }
    
    const uniqueTitle = await generateUniqueTitle();

    if (!uniqueTitle) {
      throw new Error("Failed to generate a unique blog title after retries");
    }

    // --------------------------
    // Step 2: Generate Content + Image Prompt
    // --------------------------
    const blogGen = await openai.chat.completions.create({
        model: "gpt-5",
        messages: [
          {
            role: "system",
            content: `
      You are an expert education blogger for "College Counsel", a platform like College Vidya 
      that helps students compare universities, explore career options, and choose the right courses.
      
      Task: Given a blog title, generate a complete, ready-to-publish blog with rich HTML content 
      and a detailed image prompt for a professional header image.
      
      Output format (strict JSON only, no extra text):
      {
        "content": "<section>...well-structured HTML blog content...</section>",
        "imagePrompt": "Detailed description for a professional, high-quality header image."
      }
      
      Blog Content Guidelines:
      - Write in a **human-like, natural, and engaging style**. The output should not feel AI-generated.
      - Avoid repetitive phrases or robotic tone.
      - Write in a warm, conversational tone as if you're personally guiding the reader.
      - Use personal pronouns ("you", "we", "I") to create a friendly, approachable style.
      - Share relatable examples and real-world scenarios that online students might face.
      - Break down complex concepts into simple, easy-to-understand language.
      - Use rhetorical questions to engage the reader (e.g., "Ever wondered how an online MBA could boost your career?").
      - Include personal anecdotes or success stories where relevant to illustrate points.
      - Keep paragraphs short (2-3 sentences) for better readability.
      - Use <h2>, <h3>, <p>, <ul>, <ol>, <table> where relevant.
      - Add proper formatting: bullet points, tables (fees, comparison, advantages), subheadings.
      - Be clear, structured, and SEO-friendly while maintaining a natural flow.
      - Content length should be comprehensive (1000–1400+ words) but remain engaging throughout.
      - End with a warm, encouraging conclusion that prompts reader engagement (e.g., questions, comments, or next steps).
      
      Image Prompt Guidelines:
      - Create a **professional blog header image** idea.
      - Mention specific **visual elements** (students, books, laptops, graduation caps, classrooms, modern universities, professionals, etc.).
      - Always **integrate the blog title** as bold, clear text overlay in the design.
      - Style: modern, clean, well-lit, with an academic/professional feel.
      - Color scheme: educational tones (blue, white, grey, with subtle accent colors).
      - Composition: should look like a real education blog banner, wide aspect ratio, clutter-free.
      - Ensure text overlay is legible and elegant.
      
      Rules:
      - Return ONLY valid JSON.
      - No explanations or markdown outside JSON.
      - Always include both "content" and "imagePrompt".
      - Keep HTML clean and semantic.
            `,
          },
          {
            role: "user",
            content: `Generate a blog using this title: ${uniqueTitle}`,
          },
        ],
      });
      

    const rawBlog = blogGen.choices[0].message.content ?? "{}";
    let blogData;
    try {
      blogData = JSON.parse(rawBlog);
    } catch {
      throw new Error("Blog content response not valid JSON: " + rawBlog);
    }

    // --------------------------
    // Step 3: Generate Image from Stability
    // --------------------------
    const url =
      "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image";

    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
      "Content-Type": "application/json",
    };

    const body = {
      steps: 40,
      height: 768,
      width: 1344,
      cfg_scale: 12,
      samples: 1,
      style_preset: "photographic",
      text_prompts: [
        { text: blogData.imagePrompt, weight: 1 },
        { text: "blurry, bad quality, low resolution, watermark", weight: -1 },
      ],
    };

    const response = await axios.post(url, body, { headers });

    if (!response.data?.artifacts?.length) {
      throw new Error("No image data received from Stability API");
    }

    const imageData = response.data.artifacts[0];
    const tempDir = path.join(process.cwd(), "temp");
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });
    const imagePath = path.join(tempDir, `blog_${Date.now()}.png`);
    fs.writeFileSync(imagePath, Buffer.from(imageData.base64, "base64"));

    const uploadResult = await cloudinary.uploader.upload(imagePath, {
      folder: "college_counsel_blogs",
    });

    fs.unlinkSync(imagePath); // cleanup

    // --------------------------
    // Step 4: Save Blog in DB
    // --------------------------
    const newBlog = new AiBlog({
      title: uniqueTitle,
      content: blogData.content,
      imageUrl: uploadResult.secure_url,
      slug: uniqueTitle
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/--+/g, "-")
        .substring(0, 60),
    });

    const savedBlog = await newBlog.save();

    return NextResponse.json({
      success: true,
      data: {
        id: savedBlog._id,
        title: savedBlog.title,
        content: savedBlog.content,
        imageUrl: savedBlog.imageUrl,
        slug: savedBlog.slug,
        createdAt: savedBlog.createdAt,
      },
    });
  } catch (err) {
    console.error("AI Blog Generation Error:", err.message || err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate AI blog",
        details: err.message,
      },
      { status: 500 }
    );
  }
}
