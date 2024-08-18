/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net", "fakestoreapi.com"],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
