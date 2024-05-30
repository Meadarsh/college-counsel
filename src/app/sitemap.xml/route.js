import connectDb from '@/databaseConnection/connect';
import Blogs from '@/models/blog.model';
import { NextResponse } from 'next/server';
import { AboutCollege } from '../Data/aboutCollege';

export async function GET() {
    await connectDb();
    const blogs = await Blogs.find({}, 'id, upload_time')
  const staticRoutes = [
    {
      url: 'https://collegecounsel.co.in',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://collegecounsel.co.in/about',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://collegecounsel.co.in/blogs',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  const dynamicRoutes = blogs.map((blog) => ({
    url: `https://collegecounsel.co.in/blog/${blog.id}`,
    lastModified: new Date(blog.upload_time).toISOString(),
    changeFrequency: 'daily',
    priority: 0.5,
  }));
  const dynamicCollegeRoutes = Object.keys(AboutCollege).map((key) => ({
    url: `https://collegecounsel.co.in/university/${key}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 0.5,
  }));

  const allRoutes = [...staticRoutes, ...dynamicRoutes,...dynamicCollegeRoutes];

  // Generate XML for sitemap
  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .map((route) => {
          return `
            <url>
              <loc>${route.url}</loc>
              <lastmod>${route.lastModified}</lastmod>
              <changefreq>${route.changeFrequency}</changefreq>
              <priority>${route.priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
