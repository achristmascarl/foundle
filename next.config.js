/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // TODO: update domains for next
    domains: [
      'www.slideteam.net',
      'upload.wikimedia.org'
    ],
  },
}

module.exports = nextConfig
