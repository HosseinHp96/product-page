/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "eu.mingalondon.com",
      },
    ],
  },
};

export default nextConfig;
