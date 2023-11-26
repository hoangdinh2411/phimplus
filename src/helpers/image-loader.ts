'use client';
export const imageUrl = 'https://img.ophim9.cc/uploads/movies/';
export default function myImageLoader({ src }: { src: string }) {
  return imageUrl + src;
}
