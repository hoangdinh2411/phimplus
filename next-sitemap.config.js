/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN || 'https://www.plusphim.com/',
  generateRobotsTxt: true,
  sitemapSize: 7000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'black-listed-bot',
        disallow: ['/admin'],
      },
    ],
    additionalSitemaps: ['https://www.plusphim.com/server-sitemap.xml'],
  },
};
