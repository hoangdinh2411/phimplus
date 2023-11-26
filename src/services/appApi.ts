import { Item } from '~/types/app';
import request from './request';

export const fetchListCategory = async () => {
  const res = await request<{
    items: Item[];
  }>('/v1/api/the-loai', {
    cache: 'force-cache',
  });

  return res.data.items.map((item) => ({
    ...item,
    slug: '/the-loai/' + item.slug,
  }));
};

export const fetchListCountries = async () => {
  const res = await request<{
    items: Item[];
  }>('/v1/api/quoc-gia', {
    cache: 'force-cache',
  });
  return res.data.items.map((item) => ({
    ...item,
    slug: '/quoc-gia/' + item.slug,
  }));
};
