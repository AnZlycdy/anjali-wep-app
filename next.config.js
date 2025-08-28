/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // avoids Next Image server
};
module.exports = nextConfig;
