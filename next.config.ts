import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactProductionProfiling: true,
  experimental: {
    serverMinification: false,
  },
};

export default nextConfig;
