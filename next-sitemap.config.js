/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'http://localhost:3000',
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
    additionalSitemaps: ['http://localhost:3000/server-sitemap.xml'],
  },
};
