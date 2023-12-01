/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loaderFile: './src/helpers/image-loader.ts',
  },
};

module.exports = nextConfig;
