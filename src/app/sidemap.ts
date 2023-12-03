import { MetadataRoute } from 'next';
import { APP_ROUTERS } from '~/helpers/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.plusphim.com',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: `https://www.plusphim.com${APP_ROUTERS.CATEGORY}`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: `https://www.plusphim.com${APP_ROUTERS.LIST}`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: `https://www.plusphim.com${APP_ROUTERS.MOVIE}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `https://www.plusphim.com${APP_ROUTERS.WATCH}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}
