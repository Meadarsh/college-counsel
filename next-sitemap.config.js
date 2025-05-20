module.exports = {
    siteUrl: 'https://collegecounsel.co.in', // Change to your domain
    generateRobotsTxt: true, // (optional)
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 7000,
    exclude: ['/admin/*', '/api/*'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://collegecounsel.co.in/server-sitemap.xml',
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
  