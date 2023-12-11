import { getServerSideSitemap } from 'next-sitemap';
import { APP_CONFIG } from '~/helpers/config';
import { fetchListCategory, fetchListCountries } from '~/services/appApi';

export async function GET(request: Request) {
  const categories = await fetchListCategory();
  const countries = await fetchListCountries();
  const domain = APP_CONFIG.DOMAIN;
  const siteMapForCategories: any = categories.map((category) => ({
    loc: domain + category.slug,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 0.7,
  }));

  const siteMapForCountries: any = countries.map((country) => ({
    loc: domain + country.slug,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 0.7,
  }));
  return getServerSideSitemap([
    {
      loc: `${domain}`,
      lastmod: new Date().toISOString(),
      changefreq: 'hourly',
      priority: 1,
    },
    {
      loc: `${domain}/gioi-thieu`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    },
    {
      loc: `${domain}/khieu-nai-ban-quyen`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    },
    {
      loc: `${domain}/lien-he`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    },
    {
      loc: `${domain}/tim-kiem`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    },
    {
      loc: `${domain}/dieu-khoan-su-dung`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    },
    {
      loc: `${domain}/chinh-sach-bao-mat`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    },
    {
      loc: `${domain}/phim`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    },
    {
      loc: `${domain}/xem-phim`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    },
    ...siteMapForCategories,
    ...siteMapForCountries,
  ]);
}
