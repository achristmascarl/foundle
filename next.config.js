/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'foundle.s3.amazonaws.com',
    ],
    unoptimized: true,
  },
}

module.exports = withBundleAnalyzer(nextConfig);
