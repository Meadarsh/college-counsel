import { NextResponse } from 'next/server';
import connectDb from '@/databaseConnection/connect';
import Blogs from '@/models/blog.model';
import Universities from '@/models/university.model';
import News from '@/models/news.model';
import AiBlog from '@/models/Ai-Blog';
export const dynamic='force-dynamic'
export async function GET() {
    await connectDb();
    const blog = await Blogs.find({}, 'url upload_time')
    const feed = await AiBlog.find({}, 'slug upload_time')
    const news = await News.find({}, 'url upload_time')
    const university = await Universities.find({}, 'url upload_time')
    const staticRoutes = [
    {
      url: 'https://unicompare.co.in',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://unicompare.co.in/sitemap.xml',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: .9,
    },
    {
      url: 'https://unicompare.co.in/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://unicompare.co.in/about-university',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://unicompare.co.in/apply',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: .9,
    },
    {
      url: 'https://unicompare.co.in/blog',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority:.9,
    },
  ];

  const dynamicRoutes = blog.map((blog) => ({
    url: `https://unicompare.co.in/blog/${blog.url}`,
    lastModified: new Date(blog.upload_time).toISOString(),
    changeFrequency: 'weekly',
    priority: .9,
  }));
  const dynamicNewsRoutes = news.map((news) => ({
    url: `https://unicompare.co.in/news/${news.url}`,
    lastModified: new Date(news.upload_time).toISOString(),
    changeFrequency: 'weekly',
    priority: .9,
  }));
  const dynamicCollegeRoutes = university.map((university) => ({
    url: `https://unicompare.co.in/about-university/${university.url}`,
    lastModified: new Date(university.upload_time).toISOString(),
    changeFrequency: 'weekly',
    priority:.9,
  }));
  const dynamicFeedRoutes = feed
    .filter(feedItem => feedItem.slug) // Ensure slug exists
    .map((feedItem) => ({
      url: `https://unicompare.co.in/feed/${feedItem.slug}`,
      lastModified: feedItem.upload_time ? new Date(feedItem.upload_time).toISOString() : new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }));

  const allRoutes = [...staticRoutes, ...dynamicRoutes,...dynamicCollegeRoutes,...dynamicNewsRoutes,...dynamicFeedRoutes];

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
