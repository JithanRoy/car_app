/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: {
          allowFutureImage: true,
          domains: ["cdn.imagin.studio"]
        },
      },
}

module.exports = nextConfig
