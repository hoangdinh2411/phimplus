import { MetadataRoute } from 'next';
import { APP_ROUTERS } from '~/helpers/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process?.env?.NEXT_PUBLIC_DOMAIN || '',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: `${process?.env?.NEXT_PUBLIC_DOMAIN}/${APP_ROUTERS.CATEGORY}`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: `${process?.env?.NEXT_PUBLIC_DOMAIN}/${APP_ROUTERS.LIST}`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: `${process?.env?.NEXT_PUBLIC_DOMAIN}/${APP_ROUTERS.MOVIE}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${process?.env?.NEXT_PUBLIC_DOMAIN}/${APP_ROUTERS.WATCH}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}
