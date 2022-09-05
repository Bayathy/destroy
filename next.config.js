/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["storage.googleapis.com", "park.ajinomoto.co.jp"]
  }
}

module.exports = nextConfig
