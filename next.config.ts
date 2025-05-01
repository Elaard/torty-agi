import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'torty-agi.s3.eu-north-1.amazonaws.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'wszystkiegoslodkiego.pl',
        pathname: '/storage/images/**',
      }
    ]
  }
};

export default nextConfig;
