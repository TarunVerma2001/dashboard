/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "s3-alpha-sig.figma.com",
      },
    ],
  },
};

module.exports = nextConfig;
