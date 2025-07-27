import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.10minuteschool.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 's3.ap-southeast-1.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
