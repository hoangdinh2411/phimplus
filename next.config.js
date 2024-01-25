/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.ophim9.cc',
        port: '',
        pathname: '/uploads/movies/**',
      },
      {
        protocol: 'https',
        hostname: ' imgyn.imageshh.com',
        port: '',
      },
    ],
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
