/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       domains: ["cdn.imagin.studio"]
    },
    experimental: {
        images: {
          allowFutureImage: true,
          domains: ["cdn.imagin.studio"]
        },
      },
}

module.exports = nextConfig
