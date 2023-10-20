/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/nft-pawn-shop" : undefined,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
