import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  reactProductionProfiling: true,
  experimental: {
    serverMinification: false,
  },
};

export default nextConfig;
