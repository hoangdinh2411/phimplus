'use client';
export const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
export default function myImageLoader({ src }: { src: string }) {
  return 'https://img.ophim9.cc/uploads/movies/' + src;
}
