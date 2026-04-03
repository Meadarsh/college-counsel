module.exports = {
    siteUrl: 'https://unicompare.co.in', // Change to your domain
    generateRobotsTxt: true, // Generate robots.txt automatically
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 7000, // Max URLs per sitemap file
    exclude: ['/admin', '/api/*'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://unicompare.co.in/server-sitemap.xml',
      ],
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin/*', '/api/*'],
        },
      ],
    },
  };
  