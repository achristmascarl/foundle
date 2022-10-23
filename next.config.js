/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.slideteam.net',
      'upload.wikimedia.org'
    ],
  },
}

module.exports = nextConfig
