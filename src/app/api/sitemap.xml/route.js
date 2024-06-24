import { NextResponse } from 'next/server';
import connectDb from '@/databaseConnection/connect';
import Blogs from '@/models/blog.model';
import Universities from '@/models/university.model';
export const dynamic='force-dynamic'
export async function GET() {
    await connectDb();
    const blog = await Blogs.find({}, 'url upload_time')
    const university = await Universities.find({}, 'url upload_time')
    const staticRoutes = [
    {
      url: 'https://collegecounsel.co.in',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://collegecounsel.co.in/sitemap.xml',
      lastModified: new Date().toISOString(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    {
      url: 'https://collegecounsel.co.in/about',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://collegecounsel.co.in/apply',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://collegecounsel.co.in/blog',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  const dynamicRoutes = blog.map((blog) => ({
    url: `https://collegecounsel.co.in/blog/${blog.url}`,
    lastModified: new Date(blog.upload_time).toISOString(),
    changeFrequency: 'daily',
    priority: 1,
  }));
  const dynamicCollegeRoutes = university.map((university) => ({
    url: `https://collegecounsel.co.in/about-university/${university.url}`,
    lastModified: new Date(university.upload_time).toISOString(),
    changeFrequency: 'daily',
    priority: 1,
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
